import { randomUUID } from 'crypto';
import { IGrpcHandler } from '../../../../src/domain/contracts/IGrpcHandler';
import { IProductRepository } from '../../../../src/domain/contracts/IProductRepository';
import { Product } from '../../../../src/domain/entities/product/Product';
import { CloneProductUseCase } from '../../../../src/domain/usecases/product/CloneProductUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakeProductData } from '../../../mocks/entities/FakeProduct';
import { FakeProductRepository } from '../../../mocks/repositories/FakeProductRepository';
import { GrpcHandlerStub } from '../../../mocks/repositories/GrpcHandlerStub';

const fakePharmacyData = {
  address: `Rua Projetada 23, N 12, Bairro Jardim Universitário - CEP: 78075-586 - Cuiabá - MT`,
  cnpj: '12.614.211/0001-01',
  logo: 'some-logo.com/logo.png',
  others: 'others',
  openingHours: '06:00 - 20:00',
  phone: '65984359505',
  responsible: `Shedy Husein Sinkoc`,
  name: 'name',
};

describe('CloneProductUseCase', () => {
  let sut: CloneProductUseCase;
  let productRepository: IProductRepository;
  let grpcHandler: IGrpcHandler;

  beforeEach(() => {
    grpcHandler = new GrpcHandlerStub();
    productRepository = new FakeProductRepository();
    sut = new CloneProductUseCase(productRepository, grpcHandler);
  });

  it('Should be able to clone a product', async () => {
    const product = new Product(fakeProductData);
    jest.spyOn(grpcHandler, 'getPharmacyById').mockResolvedValue({
      id: fakeProductData.pharmacyId,
      ...fakePharmacyData,
    });
    jest.spyOn(productRepository, 'findById').mockResolvedValue(product);
    jest.spyOn(productRepository, 'clone').mockResolvedValue(product);
    const clonedProduct = await sut.execute({
      pharmacyId: fakeProductData.pharmacyId,
      productId: product.id,
    });
    expect(clonedProduct).toHaveProperty('id');
  });

  it('Should not be able to clone a nonexistent product', async () => {
    const product = new Product(fakeProductData);
    await expect(
      sut.execute({
        pharmacyId: fakeProductData.pharmacyId,
        productId: product.id,
      }),
    ).rejects.toThrow(ApplicationError);
  });

  it('Should not be able to clone a product from a different pharmacy', async () => {
    const product = new Product(fakeProductData);
    jest.spyOn(grpcHandler, 'getPharmacyById').mockResolvedValue({
      id: fakeProductData.pharmacyId,
      ...fakePharmacyData,
    });
    jest.spyOn(productRepository, 'findById').mockResolvedValue(product);
    jest.spyOn(productRepository, 'clone').mockResolvedValue(product);
    await expect(
      sut.execute({
        pharmacyId: 'other-pharmacy-id',
        productId: product.id,
      }),
    ).rejects.toThrow(ApplicationError);
  });

  it('Should not be able to clone a product from a different pharmacy', async () => {
    const product = new Product(fakeProductData);
    jest.spyOn(grpcHandler, 'getPharmacyById').mockResolvedValue(undefined);
    jest.spyOn(productRepository, 'findById').mockResolvedValue(product);
    jest.spyOn(productRepository, 'clone').mockResolvedValue(product);
    await expect(
      sut.execute({
        pharmacyId: fakeProductData.pharmacyId,
        productId: product.id,
      }),
    ).rejects.toThrow(ApplicationError);
  });
});
