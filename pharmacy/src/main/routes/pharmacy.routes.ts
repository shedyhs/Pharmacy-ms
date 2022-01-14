import { Router } from 'express';
import { expressAdaptRoute } from '../adapters/expressRouteAdapter';
import { container } from '../di/container';
import {
  createPharmacy,
  deletePharmacy,
  indexPharmacy,
  showPharmacy,
  updatePharmacy,
} from './validations/pharmacy.validations';

const pharmacyRouter = Router();

pharmacyRouter.get(
  '/pharmacies',
  indexPharmacy,
  expressAdaptRoute(container.resolve('indexPharmacyController')),
);

pharmacyRouter.get(
  '/pharmacies/:id',
  showPharmacy,
  expressAdaptRoute(container.resolve('showPharmacyController')),
);

pharmacyRouter.post(
  '/pharmacies',
  createPharmacy,
  expressAdaptRoute(container.resolve('createPharmacyController')),
);

pharmacyRouter.put(
  '/pharmacies/:id',
  updatePharmacy,
  expressAdaptRoute(container.resolve('updatePharmacyController')),
);

pharmacyRouter.delete(
  '/pharmacies/:id',
  deletePharmacy,
  expressAdaptRoute(container.resolve('deletePharmacyController')),
);

export default pharmacyRouter;
