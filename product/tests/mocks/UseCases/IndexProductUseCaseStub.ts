/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { IOutputProductDTO } from '../../../src/domain/usecases/product/dtos/IOutputProductDTO';
import { IIndexProduct } from '../../../src/domain/usecases/product/interfaces/IIndexProduct';
import { IPaginatedResponse } from '../../../src/shared/interfaces/IPaginatedResponse';
import { fakeProductData } from '../entities/FakeProduct';

export class IndexProductUseCaseStub implements IIndexProduct {
  async execute(): Promise<IPaginatedResponse<IOutputProductDTO>> {
    const productId = randomUUID();
    return {
      results: [{ id: productId, ...fakeProductData }],
      total: 1,
      page: 1,
      limit: 10,
    };
  }
}
