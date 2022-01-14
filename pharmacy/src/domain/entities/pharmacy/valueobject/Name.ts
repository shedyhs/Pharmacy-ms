import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Name extends ValueObject<string> {
  static create(name: string): Name {
    this.validate(name);

    return new Name(name);
  }

  static validate(name: string): void {
    if (!name) {
      throw new DomainError('Name is required');
    }
  }
}
