import { UpdatePharmacyController } from '../../../../src/application/controller/pharmacy/UpdatePharmacyController';
import { IUpdatePharmacy } from '../../../../src/domain/usecases/pharmacies/interfaces/IUpdatePharmacy';
import { UpdatePharmacyUseCaseStub } from '../../../mocks/UseCase/UpdatePharmacyUseCaseStub';

describe('UpdatePharmacyController', () => {
  let sut: UpdatePharmacyController;
  let updatePharmacyUseCase: IUpdatePharmacy;

  beforeEach(() => {
    updatePharmacyUseCase = new UpdatePharmacyUseCaseStub();
    sut = new UpdatePharmacyController(updatePharmacyUseCase);
  });

  it('Should be able to execute UpdatePharmacyController', async () => {
    const response = await sut.handle({
      body: {},
      params: {},
      query: {},
      headers: {},
    });

    expect(response.statusCode).toBe(200);
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
