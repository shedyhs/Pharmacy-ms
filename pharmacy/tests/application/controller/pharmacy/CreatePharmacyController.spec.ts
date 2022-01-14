import { CreatePharmacyController } from '../../../../src/application/controller/pharmacy/CreatePharmacyController';
import { ICreatePharmacy } from '../../../../src/domain/usecases/pharmacies/interfaces/ICreatePharmacy';
import { CreatePharmacyUseCaseStub } from '../../../mocks/UseCase/CreatePharmacyUseCaseStub';

describe('CreatePharmacyController', () => {
  let sut: CreatePharmacyController;
  let createPharmacyUseCase: ICreatePharmacy;
  beforeEach(() => {
    createPharmacyUseCase = new CreatePharmacyUseCaseStub();
    sut = new CreatePharmacyController(createPharmacyUseCase);
  });

  it('Should be able to execute CreatePharmacyController', async () => {
    const response = await sut.handle({
      body: {},
      params: {},
      query: {},
      headers: {},
    });

    expect(response.statusCode).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('address');
    expect(response.data).toHaveProperty('cnpj');
    expect(response.data).toHaveProperty('logo');
    expect(response.data).toHaveProperty('others');
    expect(response.data).toHaveProperty('openingHours');
    expect(response.data).toHaveProperty('phone');
    expect(response.data).toHaveProperty('responsible');
    expect(response.data).toHaveProperty('name');
  });
});
