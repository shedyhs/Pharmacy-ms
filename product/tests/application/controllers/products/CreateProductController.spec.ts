import { CreateProductController } from '../../../../src/application/controller/product/CreateProductController';
import { ICreateProduct } from '../../../../src/domain/usecases/product/interfaces/ICreateProduct';
import { CreateProductUseCaseStub } from '../../../mocks/UseCases/CreateProductUseCaseStub';

describe('CreateProductController', () => {
  let sut: CreateProductController;
  let createProductUseCase: ICreateProduct;
  beforeEach(() => {
    createProductUseCase = new CreateProductUseCaseStub();
    sut = new CreateProductController(createProductUseCase);
  });

  it('Should be able to execute CreateProductController', async () => {
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
