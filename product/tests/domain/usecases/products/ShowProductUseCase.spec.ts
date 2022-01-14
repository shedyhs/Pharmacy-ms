import { Product } from '../../../../src/domain/entities/product/Product';
import { ShowProductUseCase } from '../../../../src/domain/usecases/product/ShowProductUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakeProductData } from '../../../mocks/entities/FakeProduct';
import { FakeProductRepository } from '../../../mocks/repositories/FakeProductRepository';

describe('ShowProductUseCase', () => {
  let sut: ShowProductUseCase;
  let productRepository: FakeProductRepository;
  let product: Product;

  beforeEach(async () => {
    productRepository = new FakeProductRepository();
    sut = new ShowProductUseCase(productRepository);
    product = new Product(fakeProductData);
    await productRepository.create(product);
  });

  afterEach(async () => {
    await productRepository.delete(product.id);
  });

  it('Should be able to show a existent product', async () => {
    const foundProduct = await sut.execute(product.id);
    expect(foundProduct).toHaveProperty('id', foundProduct.id);
  });

  it('Should not be able to show a nonexistent product', async () => {
    await expect(sut.execute('not-found-product')).rejects.toThrow(
      ApplicationError,
    );
  });
});
