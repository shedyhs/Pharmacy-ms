// eslint-disable-next-line import/no-unresolved
import { ICreatePharmacyDTO } from '../../../src/domain/usecases/pharmacies/dtos/ICreatePharmacyDTO';

export const fakePharmacyData: ICreatePharmacyDTO = {
  address: `Rua Projetada 23, N 12, Bairro Jardim Universitário - CEP: 78075-586 - Cuiabá - MT`,
  cnpj: '12.614.211/0001-01',
  logo: 'some-logo.com/logo.png',
  others: 'others',
  openingHours: '06:00 - 20:00',
  phone: '65984359505',
  responsible: `Shedy Husein Sinkoc`,
  name: 'name',
};

export const cnpjWithValidBranches = [
  '12.614.211/0001-01',
  '12.614.211/0002-84',
  '12.614.211/0003-65',
  '12.614.211/0004-46',
  '12.614.211/0005-27',
  '12.614.211/0006-08',
  '12.614.211/0007-99',
  '12.614.211/0008-70',
  '12.614.211/0009-50',
];
