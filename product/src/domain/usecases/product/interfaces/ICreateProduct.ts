import { ICreateProductDTO } from '../dtos/ICreateProductDTO';
import { IOutputProductDTO } from '../dtos/IOutputProductDTO';

export interface ICreateProduct {
  execute(data: ICreateProductDTO): Promise<IOutputProductDTO>;
}
