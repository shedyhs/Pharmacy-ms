import { Name } from '../../../../src/domain/entities/product/valueobject/Name';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Product.name', () => {
  it('Should not be able to create name without value', async () => {
    expect(() => Name.create('')).toThrow(DomainError);
  });
});
