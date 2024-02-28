import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../token-payload';
import { ClientProxy } from '@nestjs/microservices';
import { USER_SERVICE } from '../services';
import { catchError, tap } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    @Inject(USER_SERVICE) private userClient: ClientProxy
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          return request?.cookies?.Authentication
            ? request?.cookies?.Authentication
            : request?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate({ email }: TokenPayload) {
    return this.userClient
      .send('get_user', {
        email,
      })
      .pipe(
        tap(async (user) => {
          if (!user) {
            throw new UnauthorizedException('Credentials are not valid.');
          }

          return user;
        }),
        catchError(() => {
          throw new UnauthorizedException();
        })
      );
  }
}
