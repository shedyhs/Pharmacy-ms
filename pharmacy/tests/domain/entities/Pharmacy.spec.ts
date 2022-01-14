import { Pharmacy } from '../../../src/domain/entities/pharmacy/Pharmacy';
import { fakePharmacyData } from '../../mocks/entities/FakePharmacy';

describe('Pharmacy', () => {
  it('Should be able to create a pharmacy', async () => {
    const pharmacy = new Pharmacy(fakePharmacyData);
    expect(pharmacy).toHaveProperty('id', pharmacy.id);
    expect(pharmacy).toHaveProperty('name', fakePharmacyData.name);
    expect(pharmacy).toHaveProperty('cnpj', fakePharmacyData.cnpj);
    expect(pharmacy).toHaveProperty('address', fakePharmacyData.address);
    expect(pharmacy).toHaveProperty(
      'openingHours',
      fakePharmacyData.openingHours,
    );
    expect(pharmacy).toHaveProperty(
      'responsible',
      fakePharmacyData.responsible,
    );
    expect(pharmacy).toHaveProperty('others', fakePharmacyData.others);
    expect(pharmacy).toHaveProperty('phone', fakePharmacyData.phone);
    expect(pharmacy).toHaveProperty('logo', fakePharmacyData.logo);
  });
});
