import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Logo extends ValueObject<string> {
  static create(logo: string): Logo {
    this.validate(logo);

    return new Logo(logo);
  }

  static validate(logo: string): void {
    if (!logo) {
      throw new DomainError('Logo is required');
    }
  }
}
