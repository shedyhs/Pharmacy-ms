import { Pharmacy } from '../../../entities/pharmacy/Pharmacy';
import { IOutputPharmacyDTO } from '../dtos/IOutputPharmacyDTO';

export interface IShowPharmacy {
  execute(id: string): Promise<IOutputPharmacyDTO>;
}
