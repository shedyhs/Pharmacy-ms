import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class OpeningHours extends ValueObject<string> {
  static create(openingHours: string): OpeningHours {
    this.validate(openingHours);

    return new OpeningHours(openingHours);
  }

  static validate(openingHours: string): void {
    if (!openingHours) {
      throw new DomainError('Opening Hours is required');
    }
  }
}
