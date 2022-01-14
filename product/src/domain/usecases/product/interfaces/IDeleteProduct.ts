export interface IDeleteProduct {
  execute(id: string): Promise<void>;
}
