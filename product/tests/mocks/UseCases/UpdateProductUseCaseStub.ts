/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { IOutputProductDTO } from '../../../src/domain/usecases/product/dtos/IOutputProductDTO';
import { IUpdateProductDTO } from '../../../src/domain/usecases/product/dtos/IUpdateProductDTO';
import { IUpdateProduct } from '../../../src/domain/usecases/product/interfaces/IUpdateProduct';
import { fakeProductData } from '../entities/FakeProduct';

export class UpdateProductUseCaseStub implements IUpdateProduct {
  async execute(
    id: string,
    data: IUpdateProductDTO,
  ): Promise<IOutputProductDTO> {
    const productId = randomUUID();
    return { id: productId, ...fakeProductData };
  }
}
