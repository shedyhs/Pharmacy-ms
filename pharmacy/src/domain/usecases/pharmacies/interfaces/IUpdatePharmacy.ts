import { IOutputPharmacyDTO } from '../dtos/IOutputPharmacyDTO';
import { IUpdatePharmacyDTO } from '../dtos/IUpdatePharmacyDTO';

export interface IUpdatePharmacy {
  execute(id: string, data: IUpdatePharmacyDTO): Promise<IOutputPharmacyDTO>;
}
