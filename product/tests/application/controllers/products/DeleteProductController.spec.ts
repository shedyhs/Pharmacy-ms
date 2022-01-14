import { DeleteProductController } from '../../../../src/application/controller/product/DeleteProductController';
import { IDeleteProduct } from '../../../../src/domain/usecases/product/interfaces/IDeleteProduct';
import { DeleteProductUseCaseStub } from '../../../mocks/UseCases/DeleteProductUseCaseStub';

describe('DeleteProductController', () => {
  let sut: DeleteProductController;
  let deleteProductUseCase: IDeleteProduct;

  beforeEach(() => {
    deleteProductUseCase = new DeleteProductUseCaseStub();
    sut = new DeleteProductController(deleteProductUseCase);
  });

  it('Should be able to execute DeleteProductController', async () => {
    const response = await sut.handle({
      body: {},
      params: {},
      query: {},
      headers: {},
    });

    expect(response.statusCode).toBe(204);
  });
});
