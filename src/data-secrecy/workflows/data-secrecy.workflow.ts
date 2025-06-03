import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/data-secrecy.activities';

import { DataSecrecyRequestDto } from 'src/common/interfaces/data-secrecy.interface';

const { dataSecrecyActivity } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function dataSecrecyWorkflow(request: DataSecrecyRequestDto) {
  await dataSecrecyActivity(request)
}
