// Original file: src/main/grpc/pharmacy.proto

export interface Pharmacy {
  id?: string;
  logo?: string;
  name?: string;
  cnpj?: string;
  address?: string;
  openingHours?: string;
  responsible?: string;
  phone?: string;
  others?: string;
}

export interface Pharmacy__Output {
  id: string;
  logo: string;
  name: string;
  cnpj: string;
  address: string;
  openingHours: string;
  responsible: string;
  phone: string;
  others: string;
}
