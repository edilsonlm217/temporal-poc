import { activityInfo, CompleteAsyncError } from '@temporalio/activity';
import { DataSecrecyRequestDto } from 'src/common/interfaces/data-secrecy.interface';
import { IpdrApiService } from 'src/core/cdr/IpdrApiService';

const ipdrService = new IpdrApiService();

export async function fetchIPDRActivity(
  request: DataSecrecyRequestDto
): Promise<string[]> {
  const taskToken = activityInfo().taskToken;

  const ips = request.targets
    .filter(t => t.type === 'ip')
    .map(t => t.value);

  // dispara a requisição ao IPDR microservice (mock)
  await ipdrService.dispatchRequestToMicroservice({
    ips,
    period: request.period,
    taskToken: Buffer.from(taskToken).toString('base64'),
  });

  // informa ao worker que o resultado será entregue por CompleteAsync
  throw new CompleteAsyncError();
}
