export enum TargetType {
  CPF = 'cpf',
  IP = 'ip',
  PHONE = 'phone',
  // Pode expandir conforme necessidade
}

export enum RequestedDataType {
  CDR = 'CDR',
  IPDR = 'IPDR',
  // Pode expandir futuramente
}

export interface Authority {
  name: string;
  institution: string;
  contactEmail: string;
  processNumber: string;
}

export interface Target {
  type: TargetType;
  value: string;
}

export interface Period {
  from: string; // ISO date string
  to: string;   // ISO date string
}

export interface DataSecrecyRequestDto {
  requestId: string;
  requestedAt: string; // ISO date string
  authority: Authority;
  targets: Target[];
  requestedData: RequestedDataType[];
  period: Period;
  deadline?: string; // ISO date string para o prazo limite (opcional)
  notes?: string; // Opcional
}