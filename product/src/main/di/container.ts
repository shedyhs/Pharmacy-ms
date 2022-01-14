import * as awilix from 'awilix';
import { CloneProductController } from '../../application/controller/product/CloneProductController';
import { CreateProductController } from '../../application/controller/product/CreateProductController';
import { DeleteProductController } from '../../application/controller/product/DeleteProductController';
import { IndexProductController } from '../../application/controller/product/IndexProductController';
import { ShowProductController } from '../../application/controller/product/ShowProductController';
import { UpdateProductController } from '../../application/controller/product/UpdateProductController';
import { IGrpcHandler } from '../../domain/contracts/IGrpcHandler';
import { IProductRepository } from '../../domain/contracts/IProductRepository';
import { CloneProductUseCase } from '../../domain/usecases/product/CloneProductUseCase';
import { CreateProductUseCase } from '../../domain/usecases/product/CreateProductUseCase';
import { DeleteProductUseCase } from '../../domain/usecases/product/DeleteProductUseCase';
import { IndexProductUseCase } from '../../domain/usecases/product/IndexProductUseCase';
import { ShowProductUseCase } from '../../domain/usecases/product/ShowProductUseCase';
import { UpdateProductUseCase } from '../../domain/usecases/product/UpdateProductUseCase';
import { ProductRepository } from '../../infra/repositories/ProductRepository';
import { PharmacyGrpcHandler } from '../grpc/server';

type Cradle = {
  // Repositories
  productRepository: IProductRepository;

  // Handlers
  grpcHandler: IGrpcHandler;

  // Use cases
  createProductUseCase: CreateProductUseCase;
  updateProductUseCase: UpdateProductUseCase;
  deleteProductUseCase: DeleteProductUseCase;
  showProductUseCase: ShowProductUseCase;
  indexProductUseCase: IndexProductUseCase;
  cloneProductUseCase: CloneProductUseCase;

  // Controllers
  createProductController: CreateProductController;
  updateProductController: UpdateProductController;
  deleteProductController: DeleteProductController;
  showProductController: ShowProductController;
  indexProductController: IndexProductController;
  cloneProductController: CloneProductController;
};

const container = awilix.createContainer<Cradle>({
  injectionMode: awilix.InjectionMode.CLASSIC,
});

container.register({
  // Repositories
  productRepository: awilix.asClass(ProductRepository).singleton(),

  // Handlers
  grpcHandler: awilix.asClass(PharmacyGrpcHandler).singleton(),
  // Use cases
  createProductUseCase: awilix.asClass(CreateProductUseCase).singleton(),
  updateProductUseCase: awilix.asClass(UpdateProductUseCase).singleton(),
  deleteProductUseCase: awilix.asClass(DeleteProductUseCase).singleton(),
  showProductUseCase: awilix.asClass(ShowProductUseCase).singleton(),
  indexProductUseCase: awilix.asClass(IndexProductUseCase).singleton(),
  cloneProductUseCase: awilix.asClass(CloneProductUseCase).singleton(),

  // Controllers
  createProductController: awilix.asClass(CreateProductController).singleton(),
  updateProductController: awilix.asClass(UpdateProductController).singleton(),
  deleteProductController: awilix.asClass(DeleteProductController).singleton(),
  showProductController: awilix.asClass(ShowProductController).singleton(),
  indexProductController: awilix.asClass(IndexProductController).singleton(),
  cloneProductController: awilix.asClass(CloneProductController).singleton(),
});

export { container };
