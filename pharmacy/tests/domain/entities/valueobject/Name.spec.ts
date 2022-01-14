import { Name } from '../../../../src/domain/entities/pharmacy/valueobject/Name';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.name', () => {
  it('Should not be able to create name without value', async () => {
    expect(() => Name.create('')).toThrow(DomainError);
  });
});
