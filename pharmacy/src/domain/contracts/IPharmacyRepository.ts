import { IPaginatedRequest } from '../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../shared/interfaces/IPaginatedResponse';
import { Pharmacy } from '../entities/pharmacy/Pharmacy';

export interface IPharmacyRepository {
  create(pharmacy: Pharmacy): Promise<void>;
  update(pharmacy: Pharmacy): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Pharmacy | undefined>;
  findByCnpj(cnpj: string): Promise<Pharmacy | undefined>;
  findAllWithRootNumberCnpj(cnpjRootNumber: string): Promise<Pharmacy[]>;
  findAll({
    page,
    limit,
  }: IPaginatedRequest): Promise<IPaginatedResponse<Pharmacy>>;
}
