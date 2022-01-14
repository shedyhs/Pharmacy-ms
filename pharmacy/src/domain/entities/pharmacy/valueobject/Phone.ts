import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Phone extends ValueObject<string> {
  static create(phone: string): Phone {
    this.validate(phone);

    return new Phone(phone);
  }

  static validate(phone: string): void {
    if (!phone) {
      throw new DomainError('Phone is required');
    }

    if (phone.match(/[^0-9\-()]+/)) {
      throw new DomainError('Phone have invalid characters');
    }
  }
}
