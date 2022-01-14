import { IPharmacyRepository } from '../../domain/contracts/IPharmacyRepository';
import { Pharmacy } from '../../domain/entities/pharmacy/Pharmacy';
import { IPaginatedRequest } from '../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../shared/interfaces/IPaginatedResponse';
import prismaClient from '../prisma-client';

export class PharmacyRepository implements IPharmacyRepository {
  async create(pharmacy: Pharmacy): Promise<void> {
    await prismaClient.pharmacy.create({
      data: {
        id: pharmacy.id,
        name: pharmacy.name,
        cnpj: pharmacy.cnpj,
        address: pharmacy.address,
        responsible: pharmacy.responsible,
        phone: pharmacy.phone,
        logo: pharmacy.logo,
        opening_hours: pharmacy.openingHours,
        others: pharmacy.others,
      },
    });
  }

  async findById(id: string): Promise<Pharmacy | undefined> {
    const foundPharmacy = await prismaClient.pharmacy.findUnique({
      where: { id },
    });

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
      openingHours: foundPharmacy.opening_hours,
      others: foundPharmacy.others,
    });
  }

  async findByCnpj(cnpj: string): Promise<Pharmacy | undefined> {
    const foundPharmacy = await prismaClient.pharmacy.findFirst({
      where: { cnpj },
    });

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
      openingHours: foundPharmacy.opening_hours,
      others: foundPharmacy.others,
    });
  }

  async findAllWithRootNumberCnpj(rootNumberCnpj: string): Promise<Pharmacy[]> {
    const foundPharmacies = await prismaClient.pharmacy.findMany({
      where: {
        cnpj: {
          startsWith: rootNumberCnpj,
        },
      },
    });
    return foundPharmacies.map((pharmacy) => {
      return new Pharmacy({
        id: pharmacy.id,
        name: pharmacy.name,
        cnpj: pharmacy.cnpj,
        address: pharmacy.address,
        responsible: pharmacy.responsible,
        phone: pharmacy.phone,
        logo: pharmacy.logo,
        openingHours: pharmacy.opening_hours,
        others: pharmacy.others,
      });
    });
  }

  async findAll({
    page = 1,
    limit = 10,
  }: IPaginatedRequest): Promise<IPaginatedResponse<Pharmacy>> {
    const foundPharmacies = await prismaClient.pharmacy.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    const total = await prismaClient.pharmacy.count();
    const pharmacies = foundPharmacies.map((pharmacy) => {
      return new Pharmacy({
        id: pharmacy.id,
        name: pharmacy.name,
        cnpj: pharmacy.cnpj,
        address: pharmacy.address,
        responsible: pharmacy.responsible,
        phone: pharmacy.phone,
        logo: pharmacy.logo,
        openingHours: pharmacy.opening_hours,
        others: pharmacy.others,
      });
    });
    return {
      results: pharmacies,
      total,
      page,
      limit,
    };
  }

  async update(pharmacy: Pharmacy): Promise<void> {
    await prismaClient.pharmacy.update({
      where: { id: pharmacy.id },
      data: {
        name: pharmacy.name,
        cnpj: pharmacy.cnpj,
        address: pharmacy.address,
        responsible: pharmacy.responsible,
        phone: pharmacy.phone,
        logo: pharmacy.logo,
        opening_hours: pharmacy.openingHours,
        others: pharmacy.others,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prismaClient.pharmacy.delete({ where: { id } });
  }
}
