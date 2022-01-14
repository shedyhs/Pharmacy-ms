import { Product } from '../../../../src/domain/entities/product/Product';
import { UpdateProductUseCase } from '../../../../src/domain/usecases/product/UpdateProductUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakeProductData } from '../../../mocks/entities/FakeProduct';
import { FakeProductRepository } from '../../../mocks/repositories/FakeProductRepository';

describe('UpdateProductUseCase', () => {
  let sut: UpdateProductUseCase;
  let productRepository: FakeProductRepository;
  let product: Product;

  beforeEach(async () => {
    productRepository = new FakeProductRepository();
    sut = new UpdateProductUseCase(productRepository);
    product = new Product(fakeProductData);
    await productRepository.create(product);
  });

  afterEach(async () => {
    await productRepository.delete(product.id);
  });

  it('Should be able to update already existent product without data', async () => {
    const updatedProduct = await sut.execute(product.id, {});
    expect(updatedProduct).toHaveProperty('id');
  });

  it('Should be able to update already existent product', async () => {
    const updatedProduct = await sut.execute(product.id, {
      name: 'Updated Product',
      thumbnail: 'http://updated-thumbnail.com',
      price: 10,
      availability: 10,
      volume: 10,
      ingredients: 'Updated Ingredients',
      others: 'Updated Others',
    });
    expect(updatedProduct).toHaveProperty('id', product.id);
    expect(updatedProduct).toHaveProperty('name', 'Updated Product');
    expect(updatedProduct).toHaveProperty(
      'thumbnail',
      'http://updated-thumbnail.com',
    );
    expect(updatedProduct).toHaveProperty('price', 10);
    expect(updatedProduct).toHaveProperty('availability', 10);
    expect(updatedProduct).toHaveProperty('volume', 10);
    expect(updatedProduct).toHaveProperty('ingredients', 'Updated Ingredients');
    expect(updatedProduct).toHaveProperty('others', 'Updated Others');
  });

  it('Should not be able to update not found product', async () => {
    await expect(
      sut.execute('not-found-product', { ...fakeProductData }),
    ).rejects.toThrow(ApplicationError);
  });
});
