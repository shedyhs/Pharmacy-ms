import { Logo } from '../../../../src/domain/entities/pharmacy/valueobject/Logo';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.logo', () => {
  it('Should not be able to create logo without value', async () => {
    expect(() => Logo.create('')).toThrow(DomainError);
  });
});
