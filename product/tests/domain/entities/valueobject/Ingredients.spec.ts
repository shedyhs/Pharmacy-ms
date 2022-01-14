import { Ingredients } from '../../../../src/domain/entities/product/valueobject/Ingredients';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Product.ingredients', () => {
  it('Should not be able to create ingredients without value', async () => {
    expect(() => Ingredients.create('')).toThrow(DomainError);
  });
});
