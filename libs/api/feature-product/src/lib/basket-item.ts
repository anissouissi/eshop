import { Directive, ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "productId")')
export class BasketItem {
  @Field(() => String)
  productId: string;
}
