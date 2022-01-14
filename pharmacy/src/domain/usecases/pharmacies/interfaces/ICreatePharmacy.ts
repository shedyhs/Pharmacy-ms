import { ICreatePharmacyDTO } from '../dtos/ICreatePharmacyDTO';
import { IOutputPharmacyDTO } from '../dtos/IOutputPharmacyDTO';

export interface ICreatePharmacy {
  execute(data: ICreatePharmacyDTO): Promise<IOutputPharmacyDTO>;
}
