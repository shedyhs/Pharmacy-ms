/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDeleteProduct } from '../../../src/domain/usecases/product/interfaces/IDeleteProduct';

export class DeleteProductUseCaseStub implements IDeleteProduct {
  async execute(id: string): Promise<void> {}
}
