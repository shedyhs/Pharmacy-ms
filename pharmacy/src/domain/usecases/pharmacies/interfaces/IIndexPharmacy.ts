import { IPaginatedRequest } from '../../../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../../../shared/interfaces/IPaginatedResponse';
import { IOutputPharmacyDTO } from '../dtos/IOutputPharmacyDTO';

export interface IIndexPharmacy {
  execute({
    page,
    limit,
  }: IPaginatedRequest): Promise<IPaginatedResponse<IOutputPharmacyDTO>>;
}
