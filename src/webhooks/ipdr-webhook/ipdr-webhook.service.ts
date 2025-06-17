import { Injectable } from '@nestjs/common';
import { log } from '@meta-commons/ts-log';
import { DataSecrecyService } from 'src/data-secrecy/data-secrecy.service';
import { IpdrWebhookPayload } from './interfaces/ipdr-webhook-payload.interface';

@Injectable()
export class IpdrWebhookService {
  constructor(private readonly dataSecrecyService: DataSecrecyService) { }

  @log()
  async handleWebhook(payload: IpdrWebhookPayload) {
    const { taskToken, result } = payload;
    await this.dataSecrecyService.completeActivityFromIpdrWebhook(taskToken, result);
  }
}
