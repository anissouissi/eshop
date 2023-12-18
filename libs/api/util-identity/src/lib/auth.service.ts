import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@aso/api-identity-generated-db-types';
import { UserService } from '@aso/feature-user';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

export interface TokenPayload {
  email: string;
  sub: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<User | undefined> {
    const user = await this.userService.findOne({ where: { email } });

    if (!user) {
      return undefined;
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    return passwordsMatch ? user : undefined;
  }

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      email: user.email,
      sub: user.id,
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION')
    );

    const token = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }

  async verifyToken(token: string): Promise<User> {
    const decoded = this.jwtService.verify(token, {
      secret: this.configService.get('JWT_SECRET'),
    });
    const user = await this.userService.findOne({
      where: { email: decoded.email },
    });

    if (!user) {
      throw new Error('Unable to get the user from decoded token.');
    }

    return user;
  }

  logout(response: Response) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    });
  }
}
