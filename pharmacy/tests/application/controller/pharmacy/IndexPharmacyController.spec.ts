import { IndexPharmacyController } from '../../../../src/application/controller/pharmacy/IndexPharmacyController';
import { IIndexPharmacy } from '../../../../src/domain/usecases/pharmacies/interfaces/IIndexPharmacy';
import { IndexPharmacyUseCaseStub } from '../../../mocks/UseCase/IndexPharmacyUseCaseStub';

describe('IndexPharmacyController', () => {
  let sut: IndexPharmacyController;
  let indexPharmacyUseCase: IIndexPharmacy;

  beforeEach(() => {
    indexPharmacyUseCase = new IndexPharmacyUseCaseStub();
    sut = new IndexPharmacyController(indexPharmacyUseCase);
  });

  it('Should be able to execute IndexPharmacyController', async () => {
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
