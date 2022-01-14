import { IPaginatedRequest } from '../../../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../../../shared/interfaces/IPaginatedResponse';
import { IOutputProductDTO } from '../dtos/IOutputProductDTO';

export interface IIndexProduct {
  execute({
    page,
    limit,
  }: IPaginatedRequest): Promise<IPaginatedResponse<IOutputProductDTO>>;
}
