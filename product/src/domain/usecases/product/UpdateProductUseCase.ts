import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IProductRepository } from '../../contracts/IProductRepository';
import { Product } from '../../entities/product/Product';
import { IOutputProductDTO } from './dtos/IOutputProductDTO';
import { IUpdateProductDTO } from './dtos/IUpdateProductDTO';
import { IUpdateProduct } from './interfaces/IUpdateProduct';

export class UpdateProductUseCase implements IUpdateProduct {
  constructor(private readonly productRepository: IProductRepository) {}

  public async execute(
    id: string,
    data: IUpdateProductDTO,
  ): Promise<IOutputProductDTO> {
    const foundProduct = await this.productRepository.findById(id);
    if (!foundProduct) {
      throw new ApplicationError('Product not found', 404);
    }

    const product = new Product({
      id: foundProduct.id,
      name: data.name ?? foundProduct.name,
      volume: data.volume ?? foundProduct.volume,
      availability: data.availability ?? foundProduct.availability,
      price: data.price ?? foundProduct.price,
      ingredients: data.ingredients ?? foundProduct.ingredients,
      thumbnail: data.thumbnail ?? foundProduct.thumbnail,
      others: data.others ?? foundProduct.others,
      pharmacyId: foundProduct.pharmacyId,
    });

    await this.productRepository.update(product);

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
