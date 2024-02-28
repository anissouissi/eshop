import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { RmqModule } from '@aso/util-rmq';
import { USER_SERVICE, IDENTITY_SERVICE } from './services';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { IdentityController } from './identity.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    RmqModule.register({ name: IDENTITY_SERVICE }),
    RmqModule.register({ name: USER_SERVICE }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [RmqModule],
  controllers: [IdentityController],
  providers: [IdentityService, JwtService, LocalStrategy, JwtStrategy],
})
export class IdentityModule {}
