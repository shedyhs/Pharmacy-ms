import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IGrpcHandler } from '../../contracts/IGrpcHandler';
import { IProductRepository } from '../../contracts/IProductRepository';
import { Product } from '../../entities/product/Product';
import { ICreateProductDTO } from './dtos/ICreateProductDTO';
import { IOutputProductDTO } from './dtos/IOutputProductDTO';
import { ICreateProduct } from './interfaces/ICreateProduct';

export class CreateProductUseCase implements ICreateProduct {
  // 4 Pharmacies, 3 branches and 1 head
  private readonly maxBranches = 3 + 1;
  constructor(
    private readonly productRepository: IProductRepository,
    private readonly grpcHandler: IGrpcHandler,
  ) {}

  public async execute(data: ICreateProductDTO): Promise<IOutputProductDTO> {
    const foundPharmacy = await this.grpcHandler.getPharmacyById(
      data.pharmacyId,
    );
    if (!foundPharmacy) {
      throw new ApplicationError('Pharmacy not found', 404);
    }

    const product = new Product({
      name: data.name,
      thumbnail: data.thumbnail,
      price: data.price,
      availability: data.availability,
      volume: data.volume,
      ingredients: data.ingredients,
      others: data.others,
      pharmacyId: foundPharmacy.id,
    });

    await this.productRepository.create(product);

    return {
      id: product.id,
      name: product.name,
      availability: product.availability,
      volume: product.volume,
      price: product.price,
      ingredients: product.ingredients,
      thumbnail: product.thumbnail,
      others: product.others,
      pharmacyId: product.pharmacyId,
    };
  }
}
