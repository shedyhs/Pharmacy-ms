import { Price } from '../../../../src/domain/entities/product/valueobject/Price';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Product.price', () => {
  it('Should not be able to create price with value less than zero', async () => {
    expect(() => Price.create(-1)).toThrow(DomainError);
  });
});
