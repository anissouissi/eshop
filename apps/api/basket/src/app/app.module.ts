import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { CustomerBasketModule } from '@aso/api-feature-customer-basket';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { HealthModule } from '../health/health.module';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        BASKET_DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/basket/.env',
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    CustomerBasketModule,
  ],
})
export class AppModule {}
