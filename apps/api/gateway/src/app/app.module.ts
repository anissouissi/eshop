import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        IDENTITY_URL: Joi.string().required(),
        CATALOG_URL: Joi.string().required(),
        BASKET_URL: Joi.string().required(),
        ORDERING_URL: Joi.string().required(),
      }),
      envFilePath: './apps/catalog/.env',
    }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      server: {
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      },
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
            {
              name: 'basket',
              url: process.env.BASKET_URL,
            },
            {
              name: 'ordering',
              url: process.env.ORDERING_URL,
            },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
