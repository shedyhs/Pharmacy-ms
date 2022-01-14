import { Product } from '../../../../src/domain/entities/product/Product';
import { DeleteProductUseCase } from '../../../../src/domain/usecases/product/DeleteProductUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakeProductData } from '../../../mocks/entities/FakeProduct';
import { FakeProductRepository } from '../../../mocks/repositories/FakeProductRepository';

describe('DeleteProductUseCase', () => {
  let sut: DeleteProductUseCase;
  let productRepository: FakeProductRepository;
  let product: Product;

  beforeEach(async () => {
    productRepository = new FakeProductRepository();
    sut = new DeleteProductUseCase(productRepository);
    product = new Product(fakeProductData);
    await productRepository.create(product);
  });

  it('Should be able to delete a existent product', async () => {
    await sut.execute(product.id);
    const products = await productRepository.findAll({});
    expect(products.results).toHaveLength(0);
  });

  it('Should not be able to delete a nonexistent product', async () => {
    await expect(sut.execute('not-found-product')).rejects.toThrow(
      ApplicationError,
    );
  });
});
