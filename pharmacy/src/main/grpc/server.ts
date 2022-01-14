import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { ShowPharmacyUseCase } from '../../domain/usecases/pharmacies/ShowPharmacyUseCase';
import { PharmacyRepository } from '../../infra/repositories/PharmacyRepository';
import { ProtoGrpcType } from './proto/pharmacy';
import { PharmacyServiceHandlers } from './proto/pharmacy/PharmacyService';

const pharmacyProtoFilePath = path.resolve(__dirname, './pharmacy.proto');

const packageDefinition = protoLoader.loadSync(pharmacyProtoFilePath);
const packageObject = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as ProtoGrpcType;

const pharmacyRepository = new PharmacyRepository();
const showPharmacyUseCase = new ShowPharmacyUseCase(pharmacyRepository);

const handlers: PharmacyServiceHandlers = {
  FindById: async (call, callback) => {
    const { id } = call.request;
    try {
      const pharmacy = await showPharmacyUseCase.execute(id);
      callback(null, pharmacy);
    } catch (err) {
      const error = err as Error;
      callback(
        {
          message: error.message,
          name: error.name,
          stack: error.stack,
          code: 5,
        },
        null,
      );
    }
  },
};

const grpcServer = new grpc.Server();

grpcServer.addService(packageObject.pharmacy.PharmacyService.service, handlers);

grpcServer.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`🚀 gRPC Server running on http://localhost:${port}`);
    grpcServer.start();
  },
);
