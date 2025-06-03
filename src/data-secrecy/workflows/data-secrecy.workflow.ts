import { proxyActivities } from '@temporalio/workflow';

import type * as cdr from '../activities/cdr.activity';
import type * as ipdr from '../activities/ipdr.activity';

import {
  DataSecrecyRequestDto,
  RequestedDataType
} from '../../common/interfaces/data-secrecy.interface';

const { fetchCDRActivity } = proxyActivities<typeof cdr>({
  startToCloseTimeout: '30 minutes',
  retry: {
    maximumAttempts: 3,
    initialInterval: '2s',
    backoffCoefficient: 2,
  }
});

const { fetchIPDRActivity } = proxyActivities<typeof ipdr>({
  startToCloseTimeout: '30 minutes',
  retry: {
    maximumAttempts: 3,
    initialInterval: '2s',
    backoffCoefficient: 2,
  }
});

export async function dataSecrecyWorkflow(request: DataSecrecyRequestDto) {
  const results: Record<string, string[]> = {};

  if (request.requestedData.includes(RequestedDataType.CDR)) {
    try {
      results.CDR = await fetchCDRActivity(request);
    } catch (err) {
      // Tratar o erro: log, fallback, retorno vazio, etc.
      results.CDR = ['error'];
    }

  }

  if (request.requestedData.includes(RequestedDataType.IPDR)) {
    try {
      results.IPDR = await fetchIPDRActivity(request);
    } catch (error) {
      results.IPDR = ['error']
    }
  }

  return results;
}
