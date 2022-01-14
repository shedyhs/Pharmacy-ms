import { IGrpcHandler } from '../../../src/domain/contracts/IGrpcHandler';

export class GrpcHandlerStub implements IGrpcHandler {
  async getPharmacyById(_id: string): Promise<any> {
    return {};
  }
}
