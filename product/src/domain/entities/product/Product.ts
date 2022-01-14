import { Entity } from '../Entity';
import { Thumbnail } from './valueobject/Thumbnail';
import { Name } from './valueobject/Name';
import { Others } from './valueobject/Others';
import { Price } from './valueobject/Price';
import { Availability } from './valueobject/Availability';
import { Volume } from './valueobject/Volume';
import { Ingredients } from './valueobject/Ingredients';

type ProductProps = {
  id?: string;
  name: string;
  thumbnail: string;
  price: number;
  availability: number;
  volume: number;
  ingredients: string;
  others: string;
  pharmacyId: string;
};

export class Product extends Entity {
  private _name: Name;
  private _thumbnail: Thumbnail;
  private _price: Price;
  private _availability: Availability;
  private _volume: Volume;
  private _ingredients: Ingredients;
  private _others: Others;
  private _pharmacyId: string;

  constructor(productProps: ProductProps) {
    super(productProps.id);
    this._thumbnail = Thumbnail.create(productProps.thumbnail);
    this._name = Name.create(productProps.name);
    this._price = Price.create(productProps.price);
    this._availability = Availability.create(productProps.availability);
    this._volume = Volume.create(productProps.volume);
    this._ingredients = Ingredients.create(productProps.ingredients);
    this._others = Others.create(productProps.others);
    this._pharmacyId = productProps.pharmacyId;
  }

  get name(): string {
    return this._name.value;
  }

  get thumbnail(): string {
    return this._thumbnail.value;
  }

  get price(): number {
    return this._price.value;
  }

  get availability(): number {
    return this._availability.value;
  }

  get volume(): number {
    return this._volume.value;
  }

  get ingredients(): string {
    return this._ingredients.value;
  }

  get others(): string {
    return this._others.value;
  }

  get pharmacyId(): string {
    return this._pharmacyId;
  }
}
