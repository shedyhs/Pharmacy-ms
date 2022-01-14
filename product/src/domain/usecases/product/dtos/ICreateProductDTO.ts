export type ICreateProductDTO = {
  id?: string;
  name: string;
  volume: number;
  availability: number;
  price: number;
  ingredients: string;
  thumbnail: string;
  others: string;
  pharmacyId: string;
};
