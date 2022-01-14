import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IPharmacyRepository } from '../../contracts/IPharmacyRepository';
import { IDeletePharmacy } from './interfaces/IDeletePharmacy';

export class DeletePharmacyUseCase implements IDeletePharmacy {
  constructor(private readonly pharmacyRepository: IPharmacyRepository) {}

  public async execute(id: string): Promise<void> {
    const pharmacy = await this.pharmacyRepository.findById(id);

    if (!pharmacy) {
      throw new ApplicationError('Pharmacy not found', 404);
    }

    await this.pharmacyRepository.delete(pharmacy.id);
  }
}
