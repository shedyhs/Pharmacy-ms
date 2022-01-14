import { Volume } from '../../../../src/domain/entities/product/valueobject/Volume';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Product.volume', () => {
  it('Should not be able to create volume with value less than zero', async () => {
    expect(() => Volume.create(-1)).toThrow(DomainError);
  });
});
