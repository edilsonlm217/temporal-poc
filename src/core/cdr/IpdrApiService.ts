import { Period } from 'src/common/interfaces/data-secrecy.interface';

export class IpdrApiService {
  async fetchIPDR(ips: string[], period: Period): Promise<string[]> {
    console.log(`🔎 [IPDR] Consultando IPDR para IPs: ${ips.join(', ')}`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = Math.random() < 0.5;

        if (shouldFail) {
          console.error('❌ [IPDR] Falha simulada na consulta!');
          return reject(new Error('IPDR API simulated failure'));
        }

        const results = ips.map(ip => `IPDR data for ${ip} from ${period.from} to ${period.to}`);
        console.log('✅ [IPDR] Consulta bem-sucedida');
        resolve(results);
      }, 1500);
    });
  }
}
