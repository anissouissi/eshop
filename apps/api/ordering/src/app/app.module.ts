import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { OrderModule } from '@aso/api-feature-order';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { HealthModule } from '../health/health.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { RmqModule } from '@aso/util-rmq';
import { PAYMENT_SERVICE } from '../constants/services';
import { OrderingController } from './ordering.controller';
import { OrderingService } from './ordering.service';
//import { AuthModule } from '@aso/util-identity';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        ORDER_DATABASE_URL: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_PAYMENT_QUEUE: Joi.string().required(),
        RABBIT_MQ_AUTH_QUEUE: Joi.string().required(),
        PORT: Joi.number().required(),
        CORS_ORIGINS: Joi.string().required(),
      }),
      envFilePath: './apps/ordering/.env',
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    OrderModule,
    RmqModule.register({ name: PAYMENT_SERVICE }),
    //AuthModule,
  ],
  controllers: [OrderingController],
  providers: [OrderingService],
})
export class AppModule {}
