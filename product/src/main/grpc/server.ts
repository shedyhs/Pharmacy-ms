/* eslint-disable camelcase */
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { IGrpcHandler } from '../../domain/contracts/IGrpcHandler';

import { ProtoGrpcType } from './proto/pharmacy';
import { Pharmacy__Output } from './proto/pharmacy/Pharmacy';

const protoFilePath = path.resolve(__dirname, './pharmacy.proto');

const packageDefinition = protoLoader.loadSync(protoFilePath);
const proto = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as ProtoGrpcType;

export class PharmacyGrpcHandler implements IGrpcHandler {
  private grpcClient;

  constructor() {
    this.grpcClient = new proto.pharmacy.PharmacyService(
      'localhost:50051',
      grpc.credentials.createInsecure(),
    );
  }

  async getPharmacyById(id: string): Promise<Pharmacy__Output | undefined> {
    const res = await new Promise<Pharmacy__Output | undefined>(
      (resolve, _) => {
        this.grpcClient.FindById({ id }, (error, foundPharmacy) => {
          if (error || !foundPharmacy) {
            return resolve(undefined);
          }

          return resolve({
            id: foundPharmacy.id,
            logo: foundPharmacy.logo,
            name: foundPharmacy.name,
            cnpj: foundPharmacy.cnpj,
            address: foundPharmacy.address,
            openingHours: foundPharmacy.openingHours,
            responsible: foundPharmacy.responsible,
            phone: foundPharmacy.phone,
            others: foundPharmacy.others,
          });
        });
      },
    );
    return res;
  }
}
