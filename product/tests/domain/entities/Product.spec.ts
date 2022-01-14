import { Product } from '../../../src/domain/entities/product/Product';
import { fakeProductData } from '../../mocks/entities/FakeProduct';

describe('Product', () => {
  it('Should be able to create a product', async () => {
    const product = new Product(fakeProductData);
    expect(product).toHaveProperty('id', product.id);
    expect(product).toHaveProperty('name', fakeProductData.name);
    expect(product).toHaveProperty('thumbnail', fakeProductData.thumbnail);
    expect(product).toHaveProperty('price', fakeProductData.price);
    expect(product).toHaveProperty('volume', fakeProductData.volume);
    expect(product).toHaveProperty('ingredients', fakeProductData.ingredients);
    expect(product).toHaveProperty('others', fakeProductData.others);
    expect(product).toHaveProperty(
      'availability',
      fakeProductData.availability,
    );
  });
});
