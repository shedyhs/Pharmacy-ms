import { Address } from '../../../../src/domain/entities/pharmacy/valueobject/Address';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.address', () => {
  it('Should not be able to create address without value', async () => {
    expect(() => Address.create('')).toThrow(DomainError);
  });
});
