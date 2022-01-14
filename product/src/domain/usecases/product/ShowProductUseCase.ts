import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IProductRepository } from '../../contracts/IProductRepository';
import { IOutputProductDTO } from './dtos/IOutputProductDTO';
import { IShowProduct } from './interfaces/IShowProduct';

export class ShowProductUseCase implements IShowProduct {
  constructor(private readonly productRepository: IProductRepository) {}

  public async execute(id: string): Promise<IOutputProductDTO> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new ApplicationError('Product not found', 404);
    }

    return {
      id: product.id,
      name: product.name,
      volume: product.volume,
      availability: product.availability,
      price: product.price,
      ingredients: product.ingredients,
      thumbnail: product.thumbnail,
      others: product.others,
      pharmacyId: product.pharmacyId,
    };
  }
}
