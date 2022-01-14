import { OpeningHours } from '../../../../src/domain/entities/pharmacy/valueobject/OpeningHours';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.openingHours', () => {
  it('Should not be able to create opening hours without value', async () => {
    expect(() => OpeningHours.create('')).toThrow(DomainError);
  });
});
