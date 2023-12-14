import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        IDENTITY_URL: Joi.string().required(),
        CATALOG_URL: Joi.string().required(),
      }),
      envFilePath: './apps/catalog/.env',
    }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'identity',
              url: process.env.IDENTITY_URL,
            },
            {
              name: 'catalog',
              url: process.env.CATALOG_URL,
            },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
