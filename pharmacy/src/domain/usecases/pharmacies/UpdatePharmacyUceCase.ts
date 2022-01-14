import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IPharmacyRepository } from '../../contracts/IPharmacyRepository';
import { Pharmacy } from '../../entities/pharmacy/Pharmacy';
import { IOutputPharmacyDTO } from './dtos/IOutputPharmacyDTO';
import { IUpdatePharmacyDTO } from './dtos/IUpdatePharmacyDTO';
import { IUpdatePharmacy } from './interfaces/IUpdatePharmacy';

export class UpdatePharmacyUseCase implements IUpdatePharmacy {
  constructor(private readonly pharmacyRepository: IPharmacyRepository) {}

  public async execute(
    id: string,
    data: IUpdatePharmacyDTO,
  ): Promise<IOutputPharmacyDTO> {
    const foundPharmacy = await this.pharmacyRepository.findById(id);
    if (!foundPharmacy) {
      throw new ApplicationError('Pharmacy not found', 404);
    }

    const pharmacy = new Pharmacy({
      id: foundPharmacy.id,
      logo: data.logo ?? foundPharmacy.logo,
      name: data.name ?? foundPharmacy.name,
      cnpj: foundPharmacy.cnpj,
      address: data.address ?? foundPharmacy.address,
      openingHours: data.openingHours ?? foundPharmacy.openingHours,
      responsible: data.responsible ?? foundPharmacy.responsible,
      phone: data.phone ?? foundPharmacy.phone,
      others: data.others ?? foundPharmacy.others,
    });

    await this.pharmacyRepository.update(pharmacy);

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
