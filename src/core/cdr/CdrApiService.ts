import { Period } from 'src/common/interfaces/data-secrecy.interface';

export class CdrApiService {
  async fetchCDR(phoneNumbers: string[], period: Period): Promise<string[]> {
    // Simulação de chamada à API externa
    console.log(`🔎 [CDR] Consultando CDR para ${phoneNumbers.join(', ')}`);
    return new Promise((resolve) =>
      setTimeout(() => resolve(phoneNumbers.map(n => `CDR data for ${n}`)), 1000),
    );
  }
}
