import { IOutputProductDTO } from '../dtos/IOutputProductDTO';

export interface IShowProduct {
  execute(id: string): Promise<IOutputProductDTO>;
}
