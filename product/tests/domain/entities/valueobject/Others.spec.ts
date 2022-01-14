import { Others } from '../../../../src/domain/entities/product/valueobject/Others';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Product.Others', () => {
  it('Should not be able to create Others without value', async () => {
    expect(() => Others.create('')).toThrow(DomainError);
  });
});
