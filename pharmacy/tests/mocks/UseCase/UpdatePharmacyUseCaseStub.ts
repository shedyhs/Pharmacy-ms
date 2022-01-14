/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { IOutputPharmacyDTO } from '../../../src/domain/usecases/pharmacies/dtos/IOutputPharmacyDTO';
import { IUpdatePharmacyDTO } from '../../../src/domain/usecases/pharmacies/dtos/IUpdatePharmacyDTO';
import { IUpdatePharmacy } from '../../../src/domain/usecases/pharmacies/interfaces/IUpdatePharmacy';
import { fakePharmacyData } from '../entities/FakePharmacy';

export class UpdatePharmacyUseCaseStub implements IUpdatePharmacy {
  async execute(
    id: string,
    data: IUpdatePharmacyDTO,
  ): Promise<IOutputPharmacyDTO> {
    const pharmacyId = randomUUID();
    return { id: pharmacyId, ...fakePharmacyData };
  }
}
