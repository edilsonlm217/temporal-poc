import { Period } from 'src/common/interfaces/data-secrecy.interface';

export class CdrApiService {
  async fetchCDR(phoneNumbers: string[], period: Period): Promise<string[]> {
    console.log(`🔎 [CDR] Consultando CDR para ${phoneNumbers.join(', ')}`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = Math.random() < 0.5; // 50% de chance de falhar

        if (shouldFail) {
          console.error('❌ [CDR] Falha simulada na consulta!');
          return reject(new Error('CDR API simulated failure'));
        }

        const results = phoneNumbers.map(n => `CDR data for ${n}`);
        console.log('✅ [CDR] Consulta bem-sucedida');
        resolve(results);
      }, 1000);
    });
  }
}
