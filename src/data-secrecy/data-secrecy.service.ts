import { log } from '@meta-commons/ts-log';
import { Injectable } from '@nestjs/common';
import { Client, Connection } from '@temporalio/client';
import { DataSecrecyRequestDto } from 'src/common/interfaces/data-secrecy.interface';

@Injectable()
export class DataSecrecyService {
  private queue: DataSecrecyRequestDto[] = [];

  private client: Client | null = null;

  async onModuleInit() {
    const connection = await Connection.connect();
    this.client = new Client({ connection });
  }

  @log()
  async enqueueRequest(payload: DataSecrecyRequestDto) {
    this.queue.push(payload);
    console.log('Request added to queue:', payload.requestId);

    // Aqui pode chamar um método que inicia processamento
    this.processQueue();
  }

  @log()
  private async processQueue() {
    while (this.queue.length > 0) {
      const request = this.queue.shift();
      if (request) {
        console.log('Processing request:', request.requestId);

        // Dispara workflow no Temporal ou outra lógica aqui
        await this.startDataSecrecyWorkflow(request);

        console.log('Finished processing request:', request.requestId);
      }
    }
  }

  @log()
  async startDataSecrecyWorkflow(request: DataSecrecyRequestDto) {
    if (!this.client) throw new Error('Temporal client not initialized.');
    const handle = await this.client.workflow.start('dataSecrecyWorkflow', {
      args: [request],
      taskQueue: 'data-secrecy-task-queue',
      workflowId: 'data-secrecy-workflow-' + Date.now(),
    });
  }
}
