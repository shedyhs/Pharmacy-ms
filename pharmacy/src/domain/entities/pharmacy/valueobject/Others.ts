import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Others extends ValueObject<string> {
  static create(others: string): Others {
    this.validate(others);

    return new Others(others);
  }

  static validate(others: string): void {
    if (!others) {
      throw new DomainError('Others is required');
    }
  }
}
