import { Thumbnail } from '../../../../src/domain/entities/product/valueobject/Thumbnail';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Product.thumbnail', () => {
  it('Should not be able to create thumbnail without value', async () => {
    expect(() => Thumbnail.create('')).toThrow(DomainError);
  });
});
