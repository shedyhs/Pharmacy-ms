import { Availability } from '../../../../src/domain/entities/product/valueobject/Availability';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Product.availability', () => {
  it('Should not be able to create availability with value less than zero', async () => {
    expect(() => Availability.create(-1)).toThrow(DomainError);
  });
});
