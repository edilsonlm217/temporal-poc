import { Injectable } from '@nestjs/common';
import { Connection, Client } from '@temporalio/client';

@Injectable()
export class TemporalService {
  private client: Client | null = null;

  async onModuleInit() {
    const connection = await Connection.connect();
    this.client = new Client({ connection });
  }

  async startFirstWorkflow(name: string): Promise<string> {
    if (!this.client) throw new Error('Temporal client not initialized.');
    const handle = await this.client.workflow.start('firstWorkflow', {
      args: [name],
      taskQueue: 'example-task-queue',
      workflowId: 'first-workflow-' + Date.now(),
    });
    return handle.result();
  }

  async startSecondWorkflow(name: string): Promise<string> {
    if (!this.client) throw new Error('Temporal client not initialized.');
    const handle = await this.client.workflow.start('secondWorkflow', {
      args: [name],
      taskQueue: 'example-task-queue',
      workflowId: 'second-workflow-' + Date.now(),
    });
    return handle.result();
  }

  async dispatchWorkflow(payload: { type: string; name: string }): Promise<string> {
    switch (payload.type) {
      case 'first':
        return this.startFirstWorkflow(payload.name);
      case 'second':
        return this.startSecondWorkflow(payload.name);
      default:
        throw new Error(`Unknown workflow type: ${payload.type}`);
    }
  }
}
