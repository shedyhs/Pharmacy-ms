/* eslint-disable @typescript-eslint/no-unused-vars */
import { randomUUID } from 'crypto';
import { IOutputPharmacyDTO } from '../../../src/domain/usecases/pharmacies/dtos/IOutputPharmacyDTO';
import { IIndexPharmacy } from '../../../src/domain/usecases/pharmacies/interfaces/IIndexPharmacy';
import { IPaginatedResponse } from '../../../src/shared/interfaces/IPaginatedResponse';
import { fakePharmacyData } from '../entities/FakePharmacy';

export class IndexPharmacyUseCaseStub implements IIndexPharmacy {
  async execute(): Promise<IPaginatedResponse<IOutputPharmacyDTO>> {
    const pharmacyId = randomUUID();
    return {
      results: [{ id: pharmacyId, ...fakePharmacyData }],
      total: 1,
      page: 1,
      limit: 10,
    };
  }
}
