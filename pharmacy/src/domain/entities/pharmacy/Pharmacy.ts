import { Entity } from '../Entity';
import { Address } from './valueobject/Address';
import { Cnpj } from './valueobject/Cnpj';
import { Logo } from './valueobject/Logo';
import { Name } from './valueobject/Name';
import { OpeningHours } from './valueobject/OpeningHours';
import { Others } from './valueobject/Others';
import { Phone } from './valueobject/Phone';
import { Responsible } from './valueobject/Responsible';

type PharmacyProps = {
  id?: string;
  logo: string;
  name: string;
  cnpj: string;
  address: string;
  openingHours: string;
  responsible: string;
  phone: string;
  others: string;
};

export class Pharmacy extends Entity {
  private _logo: Logo;
  private _name: Name;
  private _cnpj: Cnpj;
  private _address: Address;
  private _openingHours: OpeningHours;
  private _responsible: Responsible;
  private _phone: Phone;
  private _others: Others;

  constructor(pharmacyProps: PharmacyProps) {
    super(pharmacyProps.id);
    this._logo = Logo.create(pharmacyProps.logo);
    this._name = Name.create(pharmacyProps.name);
    this._cnpj = Cnpj.create(pharmacyProps.cnpj);
    this._address = Address.create(pharmacyProps.address);
    this._openingHours = OpeningHours.create(pharmacyProps.openingHours);
    this._responsible = Responsible.create(pharmacyProps.responsible);
    this._phone = Phone.create(pharmacyProps.phone);
    this._others = Others.create(pharmacyProps.others);
  }

  get logo(): string {
    return this._logo.value;
  }

  get name(): string {
    return this._name.value;
  }

  get cnpj(): string {
    return this._cnpj.value;
  }

  get address(): string {
    return this._address.value;
  }

  get openingHours(): string {
    return this._openingHours.value;
  }

  get responsible(): string {
    return this._responsible.value;
  }

  get others(): string {
    return this._others.value;
  }

  get phone(): string {
    return this._phone.value;
  }
}
