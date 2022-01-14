import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { IPharmacyRepository } from '../../contracts/IPharmacyRepository';
import { Pharmacy } from '../../entities/pharmacy/Pharmacy';
import { ICreatePharmacyDTO } from './dtos/ICreatePharmacyDTO';
import { IOutputPharmacyDTO } from './dtos/IOutputPharmacyDTO';
import { ICreatePharmacy } from './interfaces/ICreatePharmacy';

export class CreatePharmacyUseCase implements ICreatePharmacy {
  // 4 Pharmacies, 3 branches and 1 head
  private readonly maxBranches = 3 + 1;
  constructor(private readonly pharmacyRepository: IPharmacyRepository) {}

  public async execute(data: ICreatePharmacyDTO): Promise<IOutputPharmacyDTO> {
    const alreadyExistsPharmacyWithCnpj =
      await this.pharmacyRepository.findByCnpj(data.cnpj);

    if (alreadyExistsPharmacyWithCnpj) {
      throw new ApplicationError('Pharmacy already exists', 409);
    }

    const cnpjRootNumber = data.cnpj.substring(0, 8);
    const pharmaciesWithCnpjRootNumber =
      await this.pharmacyRepository.findAllWithRootNumberCnpj(cnpjRootNumber);

    if (pharmaciesWithCnpjRootNumber.length >= this.maxBranches) {
      throw new ApplicationError('Maximum number of branches reached', 409);
    }

    const pharmacy = new Pharmacy({
      logo: data.logo,
      name: data.name,
      cnpj: data.cnpj,
      address: data.address,
      openingHours: data.openingHours,
      responsible: data.responsible,
      phone: data.phone,
      others: data.others,
    });

    await this.pharmacyRepository.create(pharmacy);

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
