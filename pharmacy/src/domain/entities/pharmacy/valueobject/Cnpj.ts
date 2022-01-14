import { DomainError } from '../../../../shared/errors/DomainError';
import { ValueObject } from '../../ValueObject';

export class Cnpj extends ValueObject<string> {
  static create(cnpj: string): Cnpj {
    this.validate(cnpj);

    return new Cnpj(cnpj);
  }

  static validate(cnpj: string): void {
    const cleanCnpj = this.cleanCnpj(cnpj);
    if (!cnpj) {
      throw new DomainError('Cnpj is required');
    }

    const validCnpjRegex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$|^\d{14}$/;
    if (!validCnpjRegex.test(cleanCnpj)) {
      throw new DomainError('Cnpj have invalid characters');
    }

    if (!this.isValidCnpj(cleanCnpj)) {
      throw new DomainError('Cnpj is invalid');
    }
  }

  static cleanCnpj(cnpj: string): string {
    return cnpj.replaceAll(/[^\d]+/g, '');
  }

  static isValidCnpj(rawCnpj: string): boolean {
    const blacklist = [
      '00000000000000',
      '11111111111111',
      '22222222222222',
      '33333333333333',
      '44444444444444',
      '55555555555555',
      '66666666666666',
      '77777777777777',
      '88888888888888',
      '99999999999999',
    ];

    function checkDigits(cnpj: Array<string>): number {
      const reverse = cnpj.reverse();
      let index = 2;
      let sum = 0;
      reverse.forEach((number) => {
        sum += Number(number) * index;
        if (index === 9) index = 1;
        index += 1;
      });
      return sum % 11 < 2 ? 0 : 11 - (sum % 11);
    }

    const cleanCnpj = rawCnpj.replace(/[^\d]+/g, '');
    const cnpjRegex = /^\d{14}$/;
    if (!cnpjRegex.test(cleanCnpj) || blacklist.includes(cleanCnpj)) {
      return false;
    }
    let cnpjNumbers = cleanCnpj.substring(0, 12);
    const cnpjWithoutCheckDigits = cleanCnpj.substring(0, 12).split('');
    cnpjNumbers += checkDigits(cnpjWithoutCheckDigits);
    cnpjNumbers += checkDigits(cnpjNumbers.split(''));
    if (cnpjNumbers !== cleanCnpj) {
      return false;
    }
    return true;
  }
}
