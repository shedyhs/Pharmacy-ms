import { Responsible } from '../../../../src/domain/entities/pharmacy/valueobject/Responsible';
import { DomainError } from '../../../../src/shared/errors/DomainError';

describe('Pharmacy.responsible', () => {
  it('Should not be able to create responsible without value', async () => {
    expect(() => Responsible.create('')).toThrow(DomainError);
  });

  it('Should not be able to create responsible with less then 3 characters', async () => {
    expect(() => Responsible.create('ab')).toThrow(DomainError);
  });

  it('Should not be able to create responsible with more then 100 characters', async () => {
    const responsible = 'a'.repeat(101);
    expect(() => Responsible.create(responsible)).toThrow(DomainError);
  });

  it('Should not be able to create responsible with invalid characters', async () => {
    expect(() => Responsible.create('1nv4l1d')).toThrow(DomainError);
  });
});
