import { DataSecrecyRequestDto, RequestedDataType } from 'src/common/interfaces/data-secrecy.interface';
import { CdrApiService } from 'src/core/cdr/CdrApiService';
import { IpdrApiService } from 'src/core/cdr/IpdrApiService';

const cdrService = new CdrApiService();
const ipdrService = new IpdrApiService();

export async function dataSecrecyActivity(request: DataSecrecyRequestDto) {
  const { targets, requestedData, period } = request;
  const results: Record<string, string[]> = {};

  if (requestedData.includes(RequestedDataType.CDR)) {
    const phones = targets.filter(t => t.type === 'phone').map(t => t.value);
    results.CDR = await cdrService.fetchCDR(phones, period);
  }

  if (requestedData.includes(RequestedDataType.IPDR)) {
    const ips = targets.filter(t => t.type === 'ip').map(t => t.value);
    results.IPDR = await ipdrService.fetchIPDR(ips, period);
  }

  return results;
}
