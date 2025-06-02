import { Injectable } from '@nestjs/common';
import { Connection, Client } from '@temporalio/client';

@Injectable()
export class TemporalService {
  private client: Client | null = null;

  async onModuleInit() {
    const connection = await Connection.connect();
    this.client = new Client({ connection });
  }

  async startExampleWorkflow(name: string): Promise<string> {
    if (!this.client) throw new Error('Temporal client not initialized.');
    const handle = await this.client.workflow.start('exampleWorkflow', {
      args: [name],
      taskQueue: 'example-task-queue',
      workflowId: 'workflow-' + Date.now(),
    });
    return handle.result();
  }
}
