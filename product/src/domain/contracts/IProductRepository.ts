import { IPaginatedRequest } from '../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../shared/interfaces/IPaginatedResponse';
import { Product } from '../entities/product/Product';

export interface IProductRepository {
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Product | undefined>;
  clone(product: Product, pharmacyId: string): Promise<Product>;
  findAll({
    page,
    limit,
  }: IPaginatedRequest): Promise<IPaginatedResponse<Product>>;
}
