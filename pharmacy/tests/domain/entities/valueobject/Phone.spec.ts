import { Phone } from '../../../../src/domain/entities/pharmacy/valueobject/Phone';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.phone', () => {
  it('Should not be able to create phone without value', async () => {
    expect(() => Phone.create('')).toThrow(DomainError);
  });

  it('Should not be able to create phone with invalid characters', async () => {
    expect(() => Phone.create('Phone-value')).toThrow(DomainError);
  });
});
