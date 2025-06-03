import { proxyActivities } from '@temporalio/workflow';

import type * as cdr from '../activities/cdr.activity';
import type * as ipdr from '../activities/ipdr.activity';

import {
  DataSecrecyRequestDto,
  RequestedDataType
} from '../../common/interfaces/data-secrecy.interface';

const { fetchCDRActivity } = proxyActivities<typeof cdr>({ startToCloseTimeout: '30 minutes' });
const { fetchIPDRActivity } = proxyActivities<typeof ipdr>({ startToCloseTimeout: '30 minutes' });

export async function dataSecrecyWorkflow(request: DataSecrecyRequestDto) {
  const results: Record<string, string[]> = {};

  if (request.requestedData.includes(RequestedDataType.CDR)) {
    results.CDR = await fetchCDRActivity(request);
  }

  if (request.requestedData.includes(RequestedDataType.IPDR)) {
    results.IPDR = await fetchIPDRActivity(request);
  }

  return results;
}
