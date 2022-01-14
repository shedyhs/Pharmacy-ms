/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { IOutputProductDTO } from '../../../src/domain/usecases/product/dtos/IOutputProductDTO';
import { IShowProduct } from '../../../src/domain/usecases/product/interfaces/IShowProduct';
import { fakeProductData } from '../entities/FakeProduct';

export class ShowProductUseCaseStub implements IShowProduct {
  async execute(id: string): Promise<IOutputProductDTO> {
    const pharmacyId = randomUUID();
    return { id: pharmacyId, ...fakeProductData };
  }
}
