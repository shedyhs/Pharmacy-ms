type pharmacyGrpcOutput = {
  id: string;
  logo: string;
  name: string;
  cnpj: string;
  address: string;
  openingHours: string;
  responsible: string;
  phone: string;
  others: string;
};

export interface IGrpcHandler {
  getPharmacyById(id: string): Promise<pharmacyGrpcOutput | undefined>;
}
