import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Volume extends ValueObject<number> {
  static create(volume: number): Volume {
    this.validate(volume);

    return new Volume(volume);
  }

  static validate(volume: number): void {
    if (volume < 0) {
      throw new DomainError('Volume must be greater or equal than zero');
    }
  }
}
