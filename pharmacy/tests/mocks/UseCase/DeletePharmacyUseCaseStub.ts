/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDeletePharmacy } from '../../../src/domain/usecases/pharmacies/interfaces/IDeletePharmacy';

export class DeletePharmacyUseCaseStub implements IDeletePharmacy {
  async execute(id: string): Promise<void> {}
}
