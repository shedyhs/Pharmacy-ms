import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Price extends ValueObject<number> {
  static create(price: number): Price {
    this.validate(price);

    return new Price(price);
  }

  static validate(price: number): void {
    if (price < 0) {
      throw new DomainError('Price must be greater or equal than zero');
    }
  }
}
