import { ICloneProductDTO } from '../dtos/ICloneProductDTO';
import { IOutputProductDTO } from '../dtos/IOutputProductDTO';

export interface ICloneProduct {
  execute(data: ICloneProductDTO): Promise<IOutputProductDTO>;
}
