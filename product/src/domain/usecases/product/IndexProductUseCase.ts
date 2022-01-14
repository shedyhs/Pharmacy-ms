import { IPaginatedRequest } from '../../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../../shared/interfaces/IPaginatedResponse';
import { IProductRepository } from '../../contracts/IProductRepository';
import { IOutputProductDTO } from './dtos/IOutputProductDTO';
import { IIndexProduct } from './interfaces/IIndexProduct';

export class IndexProductUseCase implements IIndexProduct {
  constructor(private readonly productRepository: IProductRepository) {}

  public async execute({
    page,
    limit,
  }: IPaginatedRequest): Promise<IPaginatedResponse<IOutputProductDTO>> {
    const foundPharmacies = await this.productRepository.findAll({
      page,
      limit,
    });

    const pharmacies = foundPharmacies.results.map(
      (product) =>
        ({
          id: product.id,
          name: product.name,
          volume: product.volume,
          availability: product.availability,
          price: product.price,
          ingredients: product.ingredients,
          thumbnail: product.thumbnail,
          others: product.others,
          pharmacyId: product.pharmacyId,
        } as IOutputProductDTO),
    );
    return {
      results: pharmacies,
      total: foundPharmacies.total,
      limit: foundPharmacies.limit,
      page: foundPharmacies.page,
    };
  }
}
