import { IPaginatedRequest } from '../../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../../shared/interfaces/IPaginatedResponse';
import { IPharmacyRepository } from '../../contracts/IPharmacyRepository';
import { IOutputPharmacyDTO } from './dtos/IOutputPharmacyDTO';
import { IIndexPharmacy } from './interfaces/IIndexPharmacy';

export class IndexPharmacyUseCase implements IIndexPharmacy {
  constructor(private readonly pharmacyRepository: IPharmacyRepository) {}

  public async execute({
    page,
    limit,
  }: IPaginatedRequest): Promise<IPaginatedResponse<IOutputPharmacyDTO>> {
    const foundPharmacies = await this.pharmacyRepository.findAll({
      page,
      limit,
    });
    const pharmacies = foundPharmacies.results.map(
      (pharmacy) =>
        ({
          id: pharmacy.id,
          logo: pharmacy.logo,
          name: pharmacy.name,
          cnpj: pharmacy.cnpj,
          address: pharmacy.address,
          openingHours: pharmacy.openingHours,
          responsible: pharmacy.responsible,
          phone: pharmacy.phone,
          others: pharmacy.others,
        } as IOutputPharmacyDTO),
    );
    return {
      results: pharmacies,
      total: foundPharmacies.total,
      limit: foundPharmacies.limit,
      page: foundPharmacies.page,
    };
  }
}
