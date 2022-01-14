// eslint-disable-next-line import/no-unresolved

import { ICreateProductDTO } from '../../../src/domain/usecases/product/dtos/ICreateProductDTO';

export const fakeProductData: ICreateProductDTO = {
  name: 'Product',
  ingredients: 'List of Ingredients',
  price: 10,
  availability: 10,
  volume: 200,
  thumbnail: 'some-thumbnail/thumbnail.png',
  others: 'Other information',
  pharmacyId: '1cc17bc0-b2c2-4b41-b899-f12cdf1060d7',
};
