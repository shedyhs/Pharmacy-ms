import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Address extends ValueObject<string> {
  static create(address: string): Address {
    this.validate(address);

    return new Address(address);
  }

  static validate(address: string): void {
    if (!address) {
      throw new DomainError('Address is required');
    }
  }
}
