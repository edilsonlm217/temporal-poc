import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/first.activities';

const { firstActivity } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function firstWorkflow(name: string): Promise<string> {
  return await firstActivity(name);
}
