export interface IDeletePharmacy {
  execute(id: string): Promise<void>;
}
