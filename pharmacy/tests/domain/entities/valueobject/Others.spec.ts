import { Others } from '../../../../src/domain/entities/pharmacy/valueobject/Others';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.others', () => {
  it('Should not be able to create others without value', async () => {
    expect(() => Others.create('')).toThrow(DomainError);
  });
});
