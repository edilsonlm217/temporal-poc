import { Module } from '@nestjs/common';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MetaLoggerMiddleware } from '@meta-commons/ts-log';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSecrecyModule } from './data-secrecy/data-secrecy.module';

@Module({
  imports: [DataSecrecyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MetaLoggerMiddleware.apply()).forRoutes('*');
  }
}
