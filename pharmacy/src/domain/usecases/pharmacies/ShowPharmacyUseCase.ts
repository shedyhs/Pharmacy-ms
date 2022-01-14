import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IPharmacyRepository } from '../../contracts/IPharmacyRepository';
import { IOutputPharmacyDTO } from './dtos/IOutputPharmacyDTO';
import { IShowPharmacy } from './interfaces/IShowPharmacy';

export class ShowPharmacyUseCase implements IShowPharmacy {
  constructor(private readonly pharmacyRepository: IPharmacyRepository) {}

  public async execute(id: string): Promise<IOutputPharmacyDTO> {
    const pharmacy = await this.pharmacyRepository.findById(id);

    if (!pharmacy) {
      throw new ApplicationError('Pharmacy not found', 404);
    }

    return {
      id: pharmacy.id,
      logo: pharmacy.logo,
      name: pharmacy.name,
      cnpj: pharmacy.cnpj,
      address: pharmacy.address,
      openingHours: pharmacy.openingHours,
      responsible: pharmacy.responsible,
      phone: pharmacy.phone,
      others: pharmacy.others,
    };
  }
}
