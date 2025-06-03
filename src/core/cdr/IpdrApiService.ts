import { Period } from 'src/common/interfaces/data-secrecy.interface';

export class IpdrApiService {
  async fetchIPDR(ips: string[], period: Period): Promise<string[]> {
    console.log(`🔎 [IPDR] Consultando IPDR para IPs: ${ips.join(', ')}`);

    // Simula uma chamada assíncrona para uma API externa
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulação simples: retorna uma string para cada IP
        const results = ips.map(ip => `IPDR data for ${ip} from ${period.from} to ${period.to}`);
        resolve(results);
      }, 1500); // Simula 1.5 segundos de resposta
    });
  }
}
