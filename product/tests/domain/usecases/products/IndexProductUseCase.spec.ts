import { Product } from '../../../../src/domain/entities/product/Product';
import { IndexProductUseCase } from '../../../../src/domain/usecases/product/IndexProductUseCase';
import { fakeProductData } from '../../../mocks/entities/FakeProduct';
import { FakeProductRepository } from '../../../mocks/repositories/FakeProductRepository';

describe('IndexProductUseCase', () => {
  let sut: IndexProductUseCase;
  let productRepository: FakeProductRepository;
  let product: Product;

  beforeEach(async () => {
    productRepository = new FakeProductRepository();
    sut = new IndexProductUseCase(productRepository);
    product = new Product(fakeProductData);
    await productRepository.create(product);
  });

  afterEach(async () => {
    await productRepository.delete(product.id);
  });

  it('Should be able to index a existent product', async () => {
    const foundProduct = await sut.execute({ limit: 10, page: 1 });
    expect(foundProduct).toHaveProperty('results', foundProduct.results);
    expect(foundProduct).toHaveProperty('page', 1);
    expect(foundProduct).toHaveProperty('limit', 10);
    expect(foundProduct).toHaveProperty('total', 1);
  });

  it('Should be possible to index products even without having any registered', async () => {
    await productRepository.delete(product.id);
    const products = await productRepository.findAll({});
    expect(products.results).toHaveLength(0);
  });
});
