import { Pharmacy } from '../../../../src/domain/entities/pharmacy/Pharmacy';
import { UpdatePharmacyUseCase } from '../../../../src/domain/usecases/pharmacies/UpdatePharmacyUceCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import { fakePharmacyData } from '../../../mocks/entities/FakePharmacy';
import { FakePharmacyRepository } from '../../../mocks/repositories/FakePharmacyRepository';

describe('UpdatePharmacyUseCase', () => {
  let sut: UpdatePharmacyUseCase;
  let pharmacyRepository: FakePharmacyRepository;
  let pharmacy: Pharmacy;

  beforeEach(async () => {
    pharmacyRepository = new FakePharmacyRepository();
    sut = new UpdatePharmacyUseCase(pharmacyRepository);
    pharmacy = new Pharmacy(fakePharmacyData);
    await pharmacyRepository.create(pharmacy);
  });

  afterEach(async () => {
    await pharmacyRepository.delete(pharmacy.id);
  });

  it('Should be able to update already existent pharmacy without data', async () => {
    const updatedPharmacy = await sut.execute(pharmacy.id, {});
    expect(updatedPharmacy).toHaveProperty('id');
  });

  it('Should be able to update already existent pharmacy', async () => {
    const updatedPharmacy = await sut.execute(pharmacy.id, {
      logo: `${fakePharmacyData.logo} updated`,
      name: `${fakePharmacyData.name} updated`,
      address: `${fakePharmacyData.address} updated`,
      openingHours: `${fakePharmacyData.openingHours} updated`,
      responsible: `${fakePharmacyData.responsible} updated`,
      phone: `65987654321`,
      others: `${fakePharmacyData.others} updated`,
    });
    expect(updatedPharmacy).toHaveProperty('id', pharmacy.id);
    expect(updatedPharmacy).toHaveProperty(
      'logo',
      `${fakePharmacyData.logo} updated`,
    );
    expect(updatedPharmacy).toHaveProperty(
      'name',
      `${fakePharmacyData.name} updated`,
    );
    expect(updatedPharmacy).toHaveProperty(
      'address',
      `${fakePharmacyData.address} updated`,
    );
    expect(updatedPharmacy).toHaveProperty(
      'openingHours',
      `${fakePharmacyData.openingHours} updated`,
    );
    expect(updatedPharmacy).toHaveProperty(
      'responsible',
      `${fakePharmacyData.responsible} updated`,
    );
    expect(updatedPharmacy).toHaveProperty('phone', `65987654321`);
    expect(updatedPharmacy).toHaveProperty(
      'others',
      `${fakePharmacyData.others} updated`,
    );
  });

  it('Should not be able to update not found pharmacy', async () => {
    await expect(
      sut.execute('not-found-pharmacy', { ...fakePharmacyData }),
    ).rejects.toThrow(ApplicationError);
  });
});
