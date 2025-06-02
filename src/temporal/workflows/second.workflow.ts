import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/second.activities';

const { secondActivity } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function secondWorkflow(name: string): Promise<string> {
  return await secondActivity(name);
}
