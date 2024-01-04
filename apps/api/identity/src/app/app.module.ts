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
import {
  JwtStrategy,
  LocalStrategy,
  AuthService,
  AuthModule,
} from '@aso/util-identity';
import { AuthController } from './auth.controller';
import { PrismaService } from '@aso/api-identity-data-access-db';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

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
        CORS_ORIGINS: Joi.string().required(),
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
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    UserModule,
    AuthModule,
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
