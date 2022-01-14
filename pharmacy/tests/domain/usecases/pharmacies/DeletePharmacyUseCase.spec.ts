import { Pharmacy } from '../../../../src/domain/entities/pharmacy/Pharmacy';
import { DeletePharmacyUseCase } from '../../../../src/domain/usecases/pharmacies/DeletePharmacyUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakePharmacyData } from '../../../mocks/entities/FakePharmacy';
import { FakePharmacyRepository } from '../../../mocks/repositories/FakePharmacyRepository';

describe('DeletePharmacyUseCase', () => {
  let sut: DeletePharmacyUseCase;
  let pharmacyRepository: FakePharmacyRepository;
  let pharmacy: Pharmacy;

  beforeEach(async () => {
    pharmacyRepository = new FakePharmacyRepository();
    sut = new DeletePharmacyUseCase(pharmacyRepository);
    pharmacy = new Pharmacy(fakePharmacyData);
    await pharmacyRepository.create(pharmacy);
  });

  it('Should be able to delete a existent pharmacy', async () => {
    await sut.execute(pharmacy.id);
    const pharmacies = await pharmacyRepository.findAll({});
    expect(pharmacies.results).toHaveLength(0);
  });

  it('Should not be able to delete a nonexistent pharmacy', async () => {
    await expect(sut.execute('not-found-pharmacy')).rejects.toThrow(
      ApplicationError,
    );
  });
});
