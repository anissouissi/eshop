import { User } from '@aso/api-identity-generated-db-types';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

export const getCurrentUserByContext = (
  context: ExecutionContext
): User | undefined => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
  if (context.getType<GqlContextType>() === 'graphql') {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
  return undefined;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context)
);
