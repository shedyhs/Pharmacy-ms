/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { ICreatePharmacyDTO } from '../../../src/domain/usecases/pharmacies/dtos/ICreatePharmacyDTO';
import { IOutputPharmacyDTO } from '../../../src/domain/usecases/pharmacies/dtos/IOutputPharmacyDTO';
import { ICreatePharmacy } from '../../../src/domain/usecases/pharmacies/interfaces/ICreatePharmacy';
import { fakePharmacyData } from '../entities/FakePharmacy';

export class CreatePharmacyUseCaseStub implements ICreatePharmacy {
  async execute(_: ICreatePharmacyDTO): Promise<IOutputPharmacyDTO> {
    const pharmacyId = randomUUID();
    return { id: pharmacyId, ...fakePharmacyData };
  }
}
