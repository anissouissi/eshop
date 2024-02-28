import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { TokenPayload } from './token-payload';
import { SignUpInput } from './dto/sign-up-input';
import { ClientProxy } from '@nestjs/microservices';
import { USER_SERVICE } from './services';
import { catchError, tap } from 'rxjs';
import { User } from './dto/user';

@Injectable()
export class IdentityService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @Inject(USER_SERVICE) private userClient: ClientProxy
  ) {}

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user.id,
      email: user.email,
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION')
    );

    const token = this.jwtService.sign(tokenPayload, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }

  validateUser(email: string, password: string) {
    return this.userClient
      .send('get_user', {
        email,
      })
      .pipe(
        tap(async (user) => {
          if (!user) {
            throw new UnauthorizedException('Credentials are not valid.');
          }

          const passwordIsValid = await bcrypt.compare(password, user.password);
          if (!passwordIsValid) {
            throw new UnauthorizedException('Credentials are not valid.');
          }

          return user;
        }),
        catchError(() => {
          throw new UnauthorizedException();
        })
      );
  }

  async signUp(user: SignUpInput, response: Response) {
    return this.userClient
      .send('create_user', {
        ...user,
      })
      .pipe(
        tap((createdUser) => {
          this.login(createdUser, response);
          return createdUser;
        }),
        catchError(() => {
          throw new UnauthorizedException();
        })
      );
  }

  logout(response: Response) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    });
  }
}
