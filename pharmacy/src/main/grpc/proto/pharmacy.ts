import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PharmacyServiceClient as _pharmacy_PharmacyServiceClient, PharmacyServiceDefinition as _pharmacy_PharmacyServiceDefinition } from './pharmacy/PharmacyService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  pharmacy: {
    FindPharmacyByIdRequest: MessageTypeDefinition
    Pharmacy: MessageTypeDefinition
    PharmacyService: SubtypeConstructor<typeof grpc.Client, _pharmacy_PharmacyServiceClient> & { service: _pharmacy_PharmacyServiceDefinition }
  }
}

