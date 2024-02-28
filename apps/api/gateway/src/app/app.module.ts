import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import Joi from 'joi';
import cookieParser from 'cookie-parser';
import { authContext } from './auth.context';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        CATALOG_URL: Joi.string().required(),
        BASKET_URL: Joi.string().required(),
        ORDERING_URL: Joi.string().required(),
        CORS_ORIGINS: Joi.string().required(),
      }),
      envFilePath: './apps/catalog/.env',
    }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      server: {
        playground: false,
        plugins: [
          ApolloServerPluginLandingPageLocalDefault({ includeCookies: true }),
        ],
        context: authContext,
      },
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
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
            {
              name: 'user',
              url: process.env.USER_URL,
            },
          ],
        }),
        buildService({ url }) {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }) {
              request.http.headers.set(
                'authentication',
                context.authentication
              );
            },
          });
        },
      },
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
