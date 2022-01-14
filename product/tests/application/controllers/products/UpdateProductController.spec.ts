import { UpdateProductController } from '../../../../src/application/controller/product/UpdateProductController';
import { IUpdateProduct } from '../../../../src/domain/usecases/product/interfaces/IUpdateProduct';
import { UpdateProductUseCaseStub } from '../../../mocks/UseCases/UpdateProductUseCaseStub';

describe('UpdateProductController', () => {
  let sut: UpdateProductController;
  let updateProductUseCase: IUpdateProduct;

  beforeEach(() => {
    updateProductUseCase = new UpdateProductUseCaseStub();
    sut = new UpdateProductController(updateProductUseCase);
  });

  it('Should be able to execute UpdateProductController', async () => {
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
