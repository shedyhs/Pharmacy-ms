// Original file: src/main/grpc/pharmacy.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { FindPharmacyByIdRequest as _pharmacy_FindPharmacyByIdRequest, FindPharmacyByIdRequest__Output as _pharmacy_FindPharmacyByIdRequest__Output } from '../pharmacy/FindPharmacyByIdRequest';
import type { Pharmacy as _pharmacy_Pharmacy, Pharmacy__Output as _pharmacy_Pharmacy__Output } from '../pharmacy/Pharmacy';

export interface PharmacyServiceClient extends grpc.Client {
  FindById(argument: _pharmacy_FindPharmacyByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  FindById(argument: _pharmacy_FindPharmacyByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  FindById(argument: _pharmacy_FindPharmacyByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  FindById(argument: _pharmacy_FindPharmacyByIdRequest, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  findById(argument: _pharmacy_FindPharmacyByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  findById(argument: _pharmacy_FindPharmacyByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  findById(argument: _pharmacy_FindPharmacyByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  findById(argument: _pharmacy_FindPharmacyByIdRequest, callback: grpc.requestCallback<_pharmacy_Pharmacy__Output>): grpc.ClientUnaryCall;
  
}

export interface PharmacyServiceHandlers extends grpc.UntypedServiceImplementation {
  FindById: grpc.handleUnaryCall<_pharmacy_FindPharmacyByIdRequest__Output, _pharmacy_Pharmacy>;
  
}

export interface PharmacyServiceDefinition extends grpc.ServiceDefinition {
  FindById: MethodDefinition<_pharmacy_FindPharmacyByIdRequest, _pharmacy_Pharmacy, _pharmacy_FindPharmacyByIdRequest__Output, _pharmacy_Pharmacy__Output>
}
