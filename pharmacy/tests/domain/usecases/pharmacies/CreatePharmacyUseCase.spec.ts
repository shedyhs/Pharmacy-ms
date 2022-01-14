import { Pharmacy } from '../../../../src/domain/entities/pharmacy/Pharmacy';
import { CreatePharmacyUseCase } from '../../../../src/domain/usecases/pharmacies/CreatePharmacyUseCase';
import { ApplicationError } from '../../../../src/shared/errors/ApplicationError';
import {
  cnpjWithValidBranches,
  fakePharmacyData,
} from '../../../mocks/entities/FakePharmacy';
import { FakePharmacyRepository } from '../../../mocks/repositories/FakePharmacyRepository';

describe('CreatePharmacyUseCase', () => {
  let sut: CreatePharmacyUseCase;
  let pharmacyRepository: FakePharmacyRepository;

  beforeEach(() => {
    pharmacyRepository = new FakePharmacyRepository();
    sut = new CreatePharmacyUseCase(pharmacyRepository);
  });

  it('Should be able to create a pharmacy', async () => {
    const createdPharmacy = await sut.execute(fakePharmacyData);
    expect(createdPharmacy).toHaveProperty('id');
  });

  it('Should not be able to create a already existent pharmacy', async () => {
    await pharmacyRepository.create(new Pharmacy(fakePharmacyData));

    await expect(sut.execute(fakePharmacyData)).rejects.toThrow(
      ApplicationError,
    );
  });

  it('Should not be able to create a branch if head already have maximum branches', async () => {
    await pharmacyRepository.create(
      new Pharmacy({ ...fakePharmacyData, cnpj: cnpjWithValidBranches[0] }),
    );
    await pharmacyRepository.create(
      new Pharmacy({ ...fakePharmacyData, cnpj: cnpjWithValidBranches[1] }),
    );
    await pharmacyRepository.create(
      new Pharmacy({ ...fakePharmacyData, cnpj: cnpjWithValidBranches[2] }),
    );
    await pharmacyRepository.create(
      new Pharmacy({ ...fakePharmacyData, cnpj: cnpjWithValidBranches[3] }),
    );
    await expect(
      sut.execute({ ...fakePharmacyData, cnpj: cnpjWithValidBranches[4] }),
    ).rejects.toThrow(ApplicationError);
  });
});
