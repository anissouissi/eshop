import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User,
} from '@aso/api-identity-generated-db-types';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args() createOneUserArgs: CreateOneUserArgs) {
    return this.userService.create(createOneUserArgs);
  }

  @Query(() => [User])
  findAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => User)
  findOneUser(@Args() findUniqueUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
    return this.userService.update(updateOneUserArgs);
  }

  @Mutation(() => User)
  removeUser(@Args() deleteOneUserArgs: DeleteOneUserArgs) {
    return this.userService.remove(deleteOneUserArgs);
  }
}
