import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { UserModule, UserService } from '@aso/feature-user';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { HealthModule } from '../health/health.module';
import { RmqModule } from '@aso/util-rmq';
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
        CORS_ORIGINS: Joi.string().required(),
        RABBIT_MQ_IDENTITY_QUEUE: Joi.string().required(),
        RABBIT_MQ_USER_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/user/.env',
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
  ],
  providers: [PrismaService, UserService],
})
export class AppModule {}
