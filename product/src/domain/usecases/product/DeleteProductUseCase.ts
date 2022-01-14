import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IProductRepository } from '../../contracts/IProductRepository';
import { IDeleteProduct } from './interfaces/IDeleteProduct';

export class DeleteProductUseCase implements IDeleteProduct {
  constructor(private readonly productRepository: IProductRepository) {}

  public async execute(id: string): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new ApplicationError('Product not found', 404);
    }

    await this.productRepository.delete(product.id);
  }
}
