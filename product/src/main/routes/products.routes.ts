import { Router } from 'express';
import { expressAdaptRoute } from '../adapters/expressRouteAdapter';
import { container } from '../di/container';
import {
  cloneProduct,
  createProduct,
  deleteProduct,
  indexProduct,
  showProduct,
  updateProduct,
} from './validations/products.validations';

const productsRouter = Router();

productsRouter.get(
  '/products',
  indexProduct,
  expressAdaptRoute(container.resolve('indexProductController')),
);

productsRouter.get(
  '/products/:id',
  showProduct,
  expressAdaptRoute(container.resolve('showProductController')),
);

productsRouter.post(
  '/products',
  createProduct,
  expressAdaptRoute(container.resolve('createProductController')),
);

productsRouter.put(
  '/products/:id',
  updateProduct,
  expressAdaptRoute(container.resolve('updateProductController')),
);

productsRouter.post(
  '/products/:productId/clone/:pharmacyId',
  cloneProduct,
  expressAdaptRoute(container.resolve('cloneProductController')),
);

productsRouter.delete(
  '/products/:id',
  deleteProduct,
  expressAdaptRoute(container.resolve('deleteProductController')),
);

export default productsRouter;
