import { IOutputProductDTO } from '../dtos/IOutputProductDTO';
import { IUpdateProductDTO } from '../dtos/IUpdateProductDTO';

export interface IUpdateProduct {
  execute(id: string, data: IUpdateProductDTO): Promise<IOutputProductDTO>;
}
