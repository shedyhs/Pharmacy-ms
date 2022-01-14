import { ShowPharmacyController } from '../../../../src/application/controller/pharmacy/ShowPharmacyController';
import { IShowPharmacy } from '../../../../src/domain/usecases/pharmacies/interfaces/IShowPharmacy';
import { ShowPharmacyUseCaseStub } from '../../../mocks/UseCase/ShowPharmacyUseCaseStub';

describe('ShowPharmacyController', () => {
  let sut: ShowPharmacyController;
  let showPharmacyUseCase: IShowPharmacy;

  beforeEach(() => {
    showPharmacyUseCase = new ShowPharmacyUseCaseStub();
    sut = new ShowPharmacyController(showPharmacyUseCase);
  });

  it('Should be able to execute ShowPharmacyController', async () => {
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
