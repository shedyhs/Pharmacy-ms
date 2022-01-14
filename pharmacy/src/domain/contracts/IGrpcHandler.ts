import { Pharmacy } from '../entities/pharmacy/Pharmacy';

export interface IGrpcHandler {
  getPharmacyById(id: string): Promise<Pharmacy | undefined>;
}
