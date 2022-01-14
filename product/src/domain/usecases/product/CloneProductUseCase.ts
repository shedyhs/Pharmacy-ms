import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IGrpcHandler } from '../../contracts/IGrpcHandler';
import { IProductRepository } from '../../contracts/IProductRepository';
import { ICloneProductDTO } from './dtos/ICloneProductDTO';
import { IOutputProductDTO } from './dtos/IOutputProductDTO';
import { ICloneProduct } from './interfaces/ICloneProduct';

export class CloneProductUseCase implements ICloneProduct {
  constructor(
    private readonly productRepository: IProductRepository,
    private readonly grpcHandler: IGrpcHandler,
  ) {}
  async execute(data: ICloneProductDTO): Promise<IOutputProductDTO> {
    const foundProduct = await this.productRepository.findById(data.productId);

    if (!foundProduct) {
      throw new ApplicationError('Product not found', 404);
    }

    if (foundProduct.pharmacyId !== data.pharmacyId) {
      throw new ApplicationError(
        'You cant clone product of another pharmacy',
        409,
      );
    }

    const pharmacy = await this.grpcHandler.getPharmacyById(data.pharmacyId);
    if (!pharmacy) {
      throw new ApplicationError('Pharmacy not found', 404);
    }
    const clonedProduct = await this.productRepository.clone(
      foundProduct,
      data.pharmacyId,
    );

    return {
      id: clonedProduct.id,
      name: clonedProduct.name,
      availability: clonedProduct.availability,
      volume: clonedProduct.volume,
      price: clonedProduct.price,
      ingredients: clonedProduct.ingredients,
      thumbnail: clonedProduct.thumbnail,
      others: clonedProduct.others,
      pharmacyId: clonedProduct.pharmacyId,
    };
  }
}
