import { Pharmacy } from '../../../../src/domain/entities/pharmacy/Pharmacy';
import { ShowPharmacyUseCase } from '../../../../src/domain/usecases/pharmacies/ShowPharmacyUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakePharmacyData } from '../../../mocks/entities/FakePharmacy';
import { FakePharmacyRepository } from '../../../mocks/repositories/FakePharmacyRepository';

describe('ShowPharmacyUseCase', () => {
  let sut: ShowPharmacyUseCase;
  let pharmacyRepository: FakePharmacyRepository;
  let pharmacy: Pharmacy;

  beforeEach(async () => {
    pharmacyRepository = new FakePharmacyRepository();
    sut = new ShowPharmacyUseCase(pharmacyRepository);
    pharmacy = new Pharmacy(fakePharmacyData);
    await pharmacyRepository.create(pharmacy);
  });

  afterEach(async () => {
    await pharmacyRepository.delete(pharmacy.id);
  });

  it('Should be able to show a existent pharmacy', async () => {
    const foundPharmacy = await sut.execute(pharmacy.id);
    expect(foundPharmacy).toHaveProperty('id', foundPharmacy.id);
  });

  it('Should not be able to show a nonexistent pharmacy', async () => {
    await expect(sut.execute('not-found-pharmacy')).rejects.toThrow(
      ApplicationError,
    );
  });
});
