export interface IpdrWebhookPayload {
  taskToken: string;  // base64 encoded string do taskToken (Uint8Array)
  status: 'success' | 'failure';
  result?: any; // conteúdo do IPDR, se sucesso
  error?: any;  // erro interpretável, se falha
}
