import { DataSecrecyRequestDto } from 'src/common/interfaces/data-secrecy.interface';
import { IpdrApiService } from 'src/core/cdr/IpdrApiService';

const ipdrService = new IpdrApiService();

export async function fetchIPDRActivity(request: DataSecrecyRequestDto): Promise<string[]> {
  const ips = request.targets.filter(t => t.type === 'ip').map(t => t.value);
  return ipdrService.fetchIPDR(ips, request.period);
}
