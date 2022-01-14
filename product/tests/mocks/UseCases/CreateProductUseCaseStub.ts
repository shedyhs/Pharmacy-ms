/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { ICreateProductDTO } from '../../../src/domain/usecases/product/dtos/ICreateProductDTO';
import { IOutputProductDTO } from '../../../src/domain/usecases/product/dtos/IOutputProductDTO';
import { ICreateProduct } from '../../../src/domain/usecases/product/interfaces/ICreateProduct';
import { fakeProductData } from '../entities/FakeProduct';

export class CreateProductUseCaseStub implements ICreateProduct {
  async execute(_: ICreateProductDTO): Promise<IOutputProductDTO> {
    const productId = randomUUID();
    return { id: productId, ...fakeProductData };
  }
}
