import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { ProductModule } from '@aso/feature-product';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { HealthModule } from '../health/health.module';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        CATALOG_DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/catalog/.env',
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    ProductModule,
  ],
})
export class AppModule {}
