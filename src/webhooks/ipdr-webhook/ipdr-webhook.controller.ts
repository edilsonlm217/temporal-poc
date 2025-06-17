// src/webhooks/ipdr-webhook.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { IpdrWebhookService } from './ipdr-webhook.service';
import { IpdrWebhookPayload } from './interfaces/ipdr-webhook-payload.interface';

@Controller('webhooks/ipdr')
export class IpdrWebhookController {
  constructor(private readonly ipdrWebhookService: IpdrWebhookService) { }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async handleCallback(@Body() payload: IpdrWebhookPayload) {
    await this.ipdrWebhookService.handleWebhook(payload);
  }
}
