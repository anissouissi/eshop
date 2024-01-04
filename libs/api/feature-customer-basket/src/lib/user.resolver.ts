import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { CustomerBasketService } from './customer-basket.service';
import { CustomerBasket } from '@aso/api-basket-generated-db-types';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly customerBasketService: CustomerBasketService) {}

  @ResolveField(() => [CustomerBasket])
  public customerBaskets(@Parent() user: User) {
    return this.customerBasketService.forCustomer(user.id);
  }
}
