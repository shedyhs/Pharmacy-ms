import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Responsible extends ValueObject<string> {
  static create(responsible: string): Responsible {
    this.validate(responsible);

    return new Responsible(responsible);
  }

  static validate(responsible: string): void {
    if (!responsible) {
      throw new DomainError('Responsible is required');
    }

    if (responsible.length < 3) {
      throw new DomainError('Responsible is too short');
    }

    if (responsible.length > 100) {
      throw new DomainError('Responsible is too long');
    }

    if (responsible.match(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ` ]+/g)) {
      throw new DomainError('Responsible has invalid characters');
    }
  }
}
