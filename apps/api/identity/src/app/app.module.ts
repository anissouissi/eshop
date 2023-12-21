import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { UserModule, UserService } from '@aso/feature-user';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { HealthModule } from '../health/health.module';
import { RmqModule } from '@aso/util-rmq';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy, LocalStrategy, AuthService } from '@aso/util-identity';
import { AuthController } from './auth.controller';
import { PrismaService } from '@aso/api-identity-data-access-db';

@Module({
  imports: [
    HealthModule,
    RmqModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        IDENTITY_DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
      }),
      envFilePath: './apps/catalog/.env',
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    PrismaService,
    UserService,
  ],
})
export class AppModule {}