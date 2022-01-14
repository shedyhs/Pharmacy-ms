import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Thumbnail extends ValueObject<string> {
  static create(thumbnail: string): Thumbnail {
    this.validate(thumbnail);

    return new Thumbnail(thumbnail);
  }

  static validate(thumbnail: string): void {
    if (!thumbnail) {
      throw new DomainError('Thumbnail is required');
    }
  }
}
