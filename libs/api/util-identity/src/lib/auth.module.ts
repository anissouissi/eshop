import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { AUTH_SERVICE } from './services';
import { RmqModule } from '@aso/util-rmq';

@Module({
  imports: [RmqModule.register({ name: AUTH_SERVICE })],
  exports: [RmqModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
