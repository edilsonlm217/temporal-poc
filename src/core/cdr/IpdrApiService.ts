import { Period } from 'src/common/interfaces/data-secrecy.interface';

export class IpdrApiService {
  async dispatchRequestToMicroservice(params: {
    ips: string[];
    period: Period;
    taskToken: string; // base64
  }): Promise<void> {
    const { ips, period, taskToken } = params;

    console.log(`🔄 [IPDR] Disparando request para microserviço IPDR`);
    console.log(`📨 IPs: ${ips.join(', ')}`);
    console.log(`📅 Período: ${period.from} até ${period.to}`);
    console.log(`🪪 TaskToken: ${taskToken.slice(0, 10)}...`);

    // Simulação de comunicação assíncrona com o microserviço:
    setTimeout(() => {
      const shouldFail = Math.random() < 0.5;

      if (shouldFail) {
        console.error('❌ [IPDR] Falha simulada na entrega ao microserviço!');
        // Aqui você não rejeita: apenas loga. O erro real será simulado via webhook
        return;
      }

      console.log('📬 [IPDR] Request entregue com sucesso ao microserviço (mock)');
      // Nesse cenário real, o microserviço chamaria o webhook posteriormente
    }, 1500);
  }
}
