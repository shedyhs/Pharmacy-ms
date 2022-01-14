import { IndexProductController } from '../../../../src/application/controller/product/IndexProductController';
import { IIndexProduct } from '../../../../src/domain/usecases/product/interfaces/IIndexProduct';
import { IndexProductUseCaseStub } from '../../../mocks/UseCases/IndexProductUseCaseStub';

describe('IndexProductController', () => {
  let sut: IndexProductController;
  let indexProductUseCase: IIndexProduct;

  beforeEach(() => {
    indexProductUseCase = new IndexProductUseCaseStub();
    sut = new IndexProductController(indexProductUseCase);
  });

  it('Should be able to execute IndexProductController', async () => {
    const response = await sut.handle({
      body: {},
      params: {},
      query: {},
      headers: {},
    });

    expect(response.statusCode).toBe(200);
    expect(response.data.results).toHaveLength(1);
    expect(response.data).toHaveProperty('total', 1);
    expect(response.data).toHaveProperty('page', 1);
    expect(response.data).toHaveProperty('limit', 10);
  });
});
