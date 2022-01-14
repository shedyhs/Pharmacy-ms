import { ShowProductController } from '../../../../src/application/controller/product/ShowProductController';
import { IShowProduct } from '../../../../src/domain/usecases/product/interfaces/IShowProduct';
import { ShowProductUseCaseStub } from '../../../mocks/UseCases/ShowProductUseCaseStub';

describe('ShowProductController', () => {
  let sut: ShowProductController;
  let showProductUseCase: IShowProduct;

  beforeEach(() => {
    showProductUseCase = new ShowProductUseCaseStub();
    sut = new ShowProductController(showProductUseCase);
  });

  it('Should be able to execute ShowProductController', async () => {
    const response = await sut.handle({
      body: {},
      params: {},
      query: {},
      headers: {},
    });

    expect(response.statusCode).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('volume');
    expect(response.data).toHaveProperty('availability');
    expect(response.data).toHaveProperty('price');
    expect(response.data).toHaveProperty('ingredients');
    expect(response.data).toHaveProperty('thumbnail');
    expect(response.data).toHaveProperty('others');
    expect(response.data).toHaveProperty('pharmacyId');
  });
});
