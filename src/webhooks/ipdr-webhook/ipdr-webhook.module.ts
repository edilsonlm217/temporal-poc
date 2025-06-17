import { Module } from '@nestjs/common';
import { IpdrWebhookController } from './ipdr-webhook.controller';
import { IpdrWebhookService } from './ipdr-webhook.service';
import { DataSecrecyModule } from 'src/data-secrecy/data-secrecy.module';

@Module({
  imports: [DataSecrecyModule],
  controllers: [IpdrWebhookController],
  providers: [IpdrWebhookService],
})
export class IpdrWebhookModule { }
