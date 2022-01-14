import { randomUUID } from 'crypto';
import { prismaMock } from '../../../singleton';
import { IPharmacyRepository } from '../../../src/domain/contracts/IPharmacyRepository';
import { Pharmacy } from '../../../src/domain/entities/pharmacy/Pharmacy';
import { PharmacyRepository } from '../../../src/infra/repositories/PharmacyRepository';
import { fakePharmacyData } from '../../mocks/entities/FakePharmacy';

describe('PharmacyRepository', () => {
  let sut: IPharmacyRepository;
  let pharmacyId: string;
  beforeEach(() => {
    sut = new PharmacyRepository();
    pharmacyId = randomUUID();
  });

  describe('Create', () => {
    it('should be able to create a new pharmacy ', async () => {
      const pharmacy = new Pharmacy({ id: pharmacyId, ...fakePharmacyData });
      prismaMock.pharmacy.create.mockResolvedValue({
        id: pharmacyId,
        logo: fakePharmacyData.logo,
        name: fakePharmacyData.name,
        cnpj: fakePharmacyData.cnpj,
        phone: fakePharmacyData.phone,
        address: fakePharmacyData.address,
        responsible: fakePharmacyData.responsible,
        opening_hours: fakePharmacyData.openingHours,
        others: fakePharmacyData.others,
      });
      await sut.create(pharmacy);
      expect(prismaMock.pharmacy.create).toHaveBeenCalledWith({
        data: {
          id: pharmacyId,
          logo: fakePharmacyData.logo,
          name: fakePharmacyData.name,
          cnpj: fakePharmacyData.cnpj,
          phone: fakePharmacyData.phone,
          address: fakePharmacyData.address,
          responsible: fakePharmacyData.responsible,
          opening_hours: fakePharmacyData.openingHours,
          others: fakePharmacyData.others,
        },
      });
    });
  });

  describe('Update', () => {
    it('Should be able to update already existent pharmacy', async () => {
      const pharmacy = new Pharmacy({ id: pharmacyId, ...fakePharmacyData });
      prismaMock.pharmacy.update.mockResolvedValue({
        id: pharmacyId,
        logo: fakePharmacyData.logo,
        name: fakePharmacyData.name,
        cnpj: fakePharmacyData.cnpj,
        phone: fakePharmacyData.phone,
        address: fakePharmacyData.address,
        responsible: fakePharmacyData.responsible,
        opening_hours: fakePharmacyData.openingHours,
        others: fakePharmacyData.others,
      });
      await sut.update(pharmacy);
      expect(prismaMock.pharmacy.update).toHaveBeenCalledWith({
        data: {
          logo: fakePharmacyData.logo,
          name: fakePharmacyData.name,
          cnpj: fakePharmacyData.cnpj,
          phone: fakePharmacyData.phone,
          address: fakePharmacyData.address,
          responsible: fakePharmacyData.responsible,
          opening_hours: fakePharmacyData.openingHours,
          others: fakePharmacyData.others,
        },
        where: { id: pharmacyId },
      });
    });
  });

  describe('Delete', () => {
    it('Should be able to delete a existent pharmacy ', async () => {
      prismaMock.pharmacy.delete.mockResolvedValue({
        id: pharmacyId,
        logo: fakePharmacyData.logo,
        name: fakePharmacyData.name,
        cnpj: fakePharmacyData.cnpj,
        phone: fakePharmacyData.phone,
        address: fakePharmacyData.address,
        responsible: fakePharmacyData.responsible,
        opening_hours: fakePharmacyData.openingHours,
        others: fakePharmacyData.others,
      });
      await sut.delete(pharmacyId);
      expect(prismaMock.pharmacy.delete).toHaveBeenCalledWith({
        where: { id: pharmacyId },
      });
    });
  });

  describe('FindById', () => {
    it('Should be able to show a existent pharmacy ', async () => {
      prismaMock.pharmacy.findUnique.mockResolvedValue({
        id: pharmacyId,
        logo: fakePharmacyData.logo,
        name: fakePharmacyData.name,
        cnpj: fakePharmacyData.cnpj,
        phone: fakePharmacyData.phone,
        address: fakePharmacyData.address,
        responsible: fakePharmacyData.responsible,
        opening_hours: fakePharmacyData.openingHours,
        others: fakePharmacyData.others,
      });
      await sut.findById(pharmacyId);
      expect(prismaMock.pharmacy.findUnique).toHaveBeenCalledWith({
        where: { id: pharmacyId },
      });
    });

    it('Should not be able to show a nonexistent pharmacy ', async () => {
      const foundPharmacy = await sut.findById('nonexistent-id');
      expect(foundPharmacy).toBeUndefined();
    });
  });

  describe('FindByCnpj', () => {
    it('Should be able to show a existent pharmacy ', async () => {
      prismaMock.pharmacy.findFirst.mockResolvedValue({
        id: pharmacyId,
        logo: fakePharmacyData.logo,
        name: fakePharmacyData.name,
        cnpj: fakePharmacyData.cnpj,
        phone: fakePharmacyData.phone,
        address: fakePharmacyData.address,
        responsible: fakePharmacyData.responsible,
        opening_hours: fakePharmacyData.openingHours,
        others: fakePharmacyData.others,
      });
      await sut.findByCnpj(fakePharmacyData.cnpj);
      expect(prismaMock.pharmacy.findFirst).toHaveBeenCalledWith({
        where: { cnpj: fakePharmacyData.cnpj },
      });
    });

    it('Should not be able to show a nonexistent pharmacy ', async () => {
      const foundPharmacy = await sut.findByCnpj('nonexistent-cnpj');
      expect(foundPharmacy).toBeUndefined();
    });
  });

  describe('FindAll', () => {
    it('Should be able to index all pharmacies', async () => {
      prismaMock.pharmacy.findMany.mockResolvedValue([
        {
          id: pharmacyId,
          logo: fakePharmacyData.logo,
          name: fakePharmacyData.name,
          cnpj: fakePharmacyData.cnpj,
          phone: fakePharmacyData.phone,
          address: fakePharmacyData.address,
          responsible: fakePharmacyData.responsible,
          opening_hours: fakePharmacyData.openingHours,
          others: fakePharmacyData.others,
        },
      ]);

      const pharmacies = await sut.findAll({});
      expect(pharmacies).toHaveProperty('results');
      expect(pharmacies.results).toHaveLength(1);
    });
  });

  describe('FindAllWithRootNumberCnpj', () => {
    it('Should be able to index all pharmacies with root number cnpj', async () => {
      prismaMock.pharmacy.findMany.mockResolvedValue([
        {
          id: pharmacyId,
          logo: fakePharmacyData.logo,
          name: fakePharmacyData.name,
          cnpj: fakePharmacyData.cnpj,
          phone: fakePharmacyData.phone,
          address: fakePharmacyData.address,
          responsible: fakePharmacyData.responsible,
          opening_hours: fakePharmacyData.openingHours,
          others: fakePharmacyData.others,
        },
      ]);
      const rootNumberCnpj = fakePharmacyData.cnpj
        .replaceAll('.', '')
        .replaceAll('-', '')
        .replaceAll('/', '');
      const pharmacies = await sut.findAllWithRootNumberCnpj(rootNumberCnpj);
      expect(pharmacies).toHaveLength(1);
    });
  });
});
