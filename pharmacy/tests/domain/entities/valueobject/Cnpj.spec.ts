import { Cnpj } from '../../../../src/domain/entities/pharmacy/valueobject/Cnpj';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.cnpj', () => {
  it('Should not be able to create cnpj without value', async () => {
    expect(() => Cnpj.create('')).toThrow(DomainError);
  });

  it('Should not be able to create cnpj with invalid format', async () => {
    expect(() => Cnpj.create('invalid-cnpj-value')).toThrow(DomainError);
  });

  it('Should not be able to create cnpj within black list of cnpj', async () => {
    expect(() => Cnpj.create('00000000000000')).toThrow(DomainError);
  });

  it('Should not be able to create cnpj with invalid cnpj', async () => {
    expect(() => Cnpj.create('55.905.874/0001-10')).toThrow(DomainError);
  });
});
