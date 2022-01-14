import { DeletePharmacyController } from '../../../../src/application/controller/pharmacy/DeletePharmacyController';
import { IDeletePharmacy } from '../../../../src/domain/usecases/pharmacies/interfaces/IDeletePharmacy';
import { DeletePharmacyUseCaseStub } from '../../../mocks/UseCase/DeletePharmacyUseCaseStub';

describe('DeletePharmacyController', () => {
  let sut: DeletePharmacyController;
  let deletePharmacyUseCase: IDeletePharmacy;

  beforeEach(() => {
    deletePharmacyUseCase = new DeletePharmacyUseCaseStub();
    sut = new DeletePharmacyController(deletePharmacyUseCase);
  });

  it('Should be able to execute DeletePharmacyController', async () => {
    const response = await sut.handle({
      body: {},
      params: {},
      query: {},
      headers: {},
    });

    expect(response.statusCode).toBe(204);
  });
});
