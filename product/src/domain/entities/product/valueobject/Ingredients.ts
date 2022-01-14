import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Ingredients extends ValueObject<string> {
  static create(ingredients: string): Ingredients {
    this.validate(ingredients);

    return new Ingredients(ingredients);
  }

  static validate(ingredients: string): void {
    if (!ingredients) {
      throw new DomainError('Ingredients is required');
    }
  }
}
