import { Pharmacy } from '../../../../src/domain/entities/pharmacy/Pharmacy';
import { IndexPharmacyUseCase } from '../../../../src/domain/usecases/pharmacies/IndexPharmacyUseCase';
import { fakePharmacyData } from '../../../mocks/entities/FakePharmacy';
import { FakePharmacyRepository } from '../../../mocks/repositories/FakePharmacyRepository';

describe('IndexPharmacyUseCase', () => {
  let sut: IndexPharmacyUseCase;
  let pharmacyRepository: FakePharmacyRepository;
  let pharmacy: Pharmacy;

  beforeEach(async () => {
    pharmacyRepository = new FakePharmacyRepository();
    sut = new IndexPharmacyUseCase(pharmacyRepository);
    pharmacy = new Pharmacy(fakePharmacyData);
    await pharmacyRepository.create(pharmacy);
  });

  afterEach(async () => {
    await pharmacyRepository.delete(pharmacy.id);
  });

  it('Should be able to index a existent pharmacy', async () => {
    const foundPharmacy = await sut.execute({ limit: 10, page: 1 });
    expect(foundPharmacy).toHaveProperty('results', foundPharmacy.results);
    expect(foundPharmacy).toHaveProperty('page', 1);
    expect(foundPharmacy).toHaveProperty('limit', 10);
    expect(foundPharmacy).toHaveProperty('total', 1);
  });

  it('Should be possible to index pharmacies even without having any registered', async () => {
    await pharmacyRepository.delete(pharmacy.id);
    const pharmacies = await pharmacyRepository.findAll({});
    expect(pharmacies.results).toHaveLength(0);
  });
});
