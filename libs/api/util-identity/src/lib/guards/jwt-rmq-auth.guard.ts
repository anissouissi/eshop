import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, Observable, tap } from 'rxjs';
import { AUTH_SERVICE } from '../services';
import { User } from '@aso/api-identity-generated-db-types';

@Injectable()
export class JwtRmqAuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authClient: ClientProxy) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authentication = this.getAuthentication(context);
    //console.log(`authentication = ${authentication}`);
    return this.authClient
      .send('validate_user', {
        Authentication: authentication,
      })
      .pipe(
        tap((res) => {
          this.addUser(res, context);
        }),
        catchError(() => {
          throw new UnauthorizedException();
        })
      );
  }

  private getAuthentication(context: ExecutionContext) {
    let authentication: string | undefined;
    if (context.getType() === 'rpc') {
      authentication = context.switchToRpc().getData().Authentication;
    }
    if (context.getType() === 'http') {
      authentication = context.switchToHttp().getRequest()
        .cookies?.Authentication;
    }
    // if (context.getType<GqlContextType>() === 'graphql') {
    //   const ctx = GqlExecutionContext.create(context);
    //   return ctx.getContext().req.user;
    // }
    if (!authentication) {
      throw new UnauthorizedException(
        'No value was provided for Authentication'
      );
    }
    return authentication;
  }

  private addUser(user: User, context: ExecutionContext) {
    if (context.getType() === 'rpc') {
      context.switchToRpc().getData().user = user;
    } else if (context.getType() === 'http') {
      context.switchToHttp().getRequest().user = user;
    }
  }
}
