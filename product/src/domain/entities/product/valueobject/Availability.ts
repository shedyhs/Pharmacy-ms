import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Availability extends ValueObject<number> {
  static create(availability: number): Availability {
    this.validate(availability);

    return new Availability(availability);
  }

  static validate(availability: number): void {
    if (availability < 0) {
      throw new DomainError('Availability must be greater or equal than zero');
    }
  }
}
