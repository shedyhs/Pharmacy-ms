/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { ICloneProductDTO } from '../../../src/domain/usecases/product/dtos/ICloneProductDTO';
import { IOutputProductDTO } from '../../../src/domain/usecases/product/dtos/IOutputProductDTO';
import { ICloneProduct } from '../../../src/domain/usecases/product/interfaces/ICloneProduct';
import { fakeProductData } from '../entities/FakeProduct';

export class CloneProductUseCaseStub implements ICloneProduct {
  async execute(_: ICloneProductDTO): Promise<IOutputProductDTO> {
    const productId = randomUUID();
    return { id: productId, ...fakeProductData };
  }
}
