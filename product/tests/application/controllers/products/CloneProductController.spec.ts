import { CloneProductController } from '../../../../src/application/controller/product/CloneProductController';
import { ICloneProduct } from '../../../../src/domain/usecases/product/interfaces/ICloneProduct';
import { CloneProductUseCaseStub } from '../../../mocks/UseCases/CloneProductUseCaseStub';

describe('CloneProductController', () => {
  let sut: CloneProductController;
  let cloneProductUseCase: ICloneProduct;
  beforeEach(() => {
    cloneProductUseCase = new CloneProductUseCaseStub();
    sut = new CloneProductController(cloneProductUseCase);
  });

  it('Should be able to execute CloneProductController', async () => {
    const response = await sut.handle({
      body: {},
      params: {},
      query: {},
      headers: {},
    });

    expect(response.statusCode).toBe(201);
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
