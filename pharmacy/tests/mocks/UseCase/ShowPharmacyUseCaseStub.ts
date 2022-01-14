/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { IOutputPharmacyDTO } from '../../../src/domain/usecases/pharmacies/dtos/IOutputPharmacyDTO';
import { IShowPharmacy } from '../../../src/domain/usecases/pharmacies/interfaces/IShowPharmacy';
import { fakePharmacyData } from '../entities/FakePharmacy';

export class ShowPharmacyUseCaseStub implements IShowPharmacy {
  async execute(id: string): Promise<IOutputPharmacyDTO> {
    const pharmacyId = randomUUID();
    return { id: pharmacyId, ...fakePharmacyData };
  }
}
