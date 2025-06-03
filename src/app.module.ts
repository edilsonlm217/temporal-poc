import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSecrecyModule } from './data-secrecy/data-secrecy.module';

@Module({
  imports: [DataSecrecyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
