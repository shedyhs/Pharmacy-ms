import { IPharmacyRepository } from '../../../src/domain/contracts/IPharmacyRepository';
import { Pharmacy } from '../../../src/domain/entities/pharmacy/Pharmacy';
import { IPaginatedRequest } from '../../../src/shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../../src/shared/interfaces/IPaginatedResponse';

export class FakePharmacyRepository implements IPharmacyRepository {
  pharmacies: Pharmacy[] = [];

  async create(pharmacy: Pharmacy): Promise<void> {
    await this.pharmacies.push(pharmacy);
  }

  async findById(id: string): Promise<Pharmacy | undefined> {
    const foundPharmacy = this.pharmacies.find(
      (pharmacy) => pharmacy.id === id,
    );

    if (!foundPharmacy) {
      return undefined;
    }

    return foundPharmacy;
  }

  async findByCnpj(cnpj: string): Promise<Pharmacy | undefined> {
    const foundPharmacy = this.pharmacies.find(
      (pharmacy) => pharmacy.cnpj === cnpj,
    );

    if (!foundPharmacy) {
      return undefined;
    }

    return new Pharmacy({
      id: foundPharmacy.id,
      name: foundPharmacy.name,
      cnpj: foundPharmacy.cnpj,
      address: foundPharmacy.address,
      responsible: foundPharmacy.responsible,
      phone: foundPharmacy.phone,
      logo: foundPharmacy.logo,
      openingHours: foundPharmacy.openingHours,
      others: foundPharmacy.others,
    });
  }

  async findAllWithRootNumberCnpj(rootNumberCnpj: string): Promise<Pharmacy[]> {
    return this.pharmacies.filter((pharmacy) =>
      pharmacy.cnpj.includes(rootNumberCnpj),
    );
  }

  async findAll({
    page = 1,
    limit = 10,
  }: IPaginatedRequest): Promise<IPaginatedResponse<Pharmacy>> {
    const minValue = (page - 1) * limit;
    const maxValue = page + limit;
    const paginatedPharmacies = this.pharmacies.slice(minValue, maxValue);
    return {
      results: paginatedPharmacies,
      total: this.pharmacies.length,
      page,
      limit,
    };
  }

  async update(pharmacy: Pharmacy): Promise<void> {
    const foundPharmacy = this.pharmacies.find(
      (pharmacyToUpdate) => pharmacyToUpdate.id === pharmacy.id,
    );
    if (!foundPharmacy) {
      return;
    }
    const index = this.pharmacies.indexOf(foundPharmacy);
    this.pharmacies[index] = pharmacy;
  }

  async delete(id: string): Promise<void> {
    const foundPharmacy = this.pharmacies.find(
      (pharmacy) => pharmacy.id === id,
    );

    if (!foundPharmacy) {
      return;
    }

    const index = this.pharmacies.indexOf(foundPharmacy);
    this.pharmacies.splice(index, 1);
  }
}
