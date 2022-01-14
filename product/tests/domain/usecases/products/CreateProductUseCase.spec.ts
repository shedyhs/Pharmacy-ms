import { IGrpcHandler } from '../../../../src/domain/contracts/IGrpcHandler';
import { IProductRepository } from '../../../../src/domain/contracts/IProductRepository';
import { Product } from '../../../../src/domain/entities/product/Product';
import { CreateProductUseCase } from '../../../../src/domain/usecases/product/CreateProductUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakeProductData } from '../../../mocks/entities/FakeProduct';
import { FakeProductRepository } from '../../../mocks/repositories/FakeProductRepository';
import { GrpcHandlerStub } from '../../../mocks/repositories/GrpcHandlerStub';

describe('CreateProductUseCase', () => {
  let sut: CreateProductUseCase;
  let productRepository: IProductRepository;
  let grpcHandler: IGrpcHandler;

  beforeEach(() => {
    grpcHandler = new GrpcHandlerStub();
    productRepository = new FakeProductRepository();
    sut = new CreateProductUseCase(productRepository, grpcHandler);
  });

  it('Should be able to create a product', async () => {
    const createdProduct = await sut.execute(fakeProductData);
    expect(createdProduct).toHaveProperty('id');
  });

  it('Should not be able to create a product with a nonexistent pharmacy', async () => {
    jest.spyOn(grpcHandler, 'getPharmacyById').mockResolvedValue(undefined);

    await productRepository.create(
      new Product({ ...fakeProductData, pharmacyId: 'nonexistent' }),
    );

    await expect(sut.execute(fakeProductData)).rejects.toThrow(
      ApplicationError,
    );
  });
});
