import { DataSecrecyRequestDto } from 'src/common/interfaces/data-secrecy.interface';
import { CdrApiService } from 'src/core/cdr/CdrApiService';

const cdrService = new CdrApiService();

export async function fetchCDRActivity(request: DataSecrecyRequestDto): Promise<string[]> {
  const phones = request.targets.filter(t => t.type === 'phone').map(t => t.value);
  return cdrService.fetchCDR(phones, request.period);
}
