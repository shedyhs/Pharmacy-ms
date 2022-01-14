import * as awilix from 'awilix';
import { CreatePharmacyController } from '../../application/controller/pharmacy/CreatePharmacyController';
import { DeletePharmacyController } from '../../application/controller/pharmacy/DeletePharmacyController';
import { IndexPharmacyController } from '../../application/controller/pharmacy/IndexPharmacyController';
import { ShowPharmacyController } from '../../application/controller/pharmacy/ShowPharmacyController';
import { UpdatePharmacyController } from '../../application/controller/pharmacy/UpdatePharmacyController';
import { CreatePharmacyUseCase } from '../../domain/usecases/pharmacies/CreatePharmacyUseCase';
import { DeletePharmacyUseCase } from '../../domain/usecases/pharmacies/DeletePharmacyUseCase';
import { IndexPharmacyUseCase } from '../../domain/usecases/pharmacies/IndexPharmacyUseCase';
import { ShowPharmacyUseCase } from '../../domain/usecases/pharmacies/ShowPharmacyUseCase';
import { UpdatePharmacyUseCase } from '../../domain/usecases/pharmacies/UpdatePharmacyUceCase';
import { PharmacyRepository } from '../../infra/repositories/PharmacyRepository';

type Cradle = {
  // Repositories
  pharmacyRepository: PharmacyRepository;

  // Use cases
  createPharmacyUseCase: CreatePharmacyUseCase;
  updatePharmacyUseCase: UpdatePharmacyUseCase;
  deletePharmacyUseCase: DeletePharmacyUseCase;
  showPharmacyUseCase: ShowPharmacyUseCase;
  indexPharmacyUseCase: IndexPharmacyUseCase;

  // Controllers
  createPharmacyController: CreatePharmacyController;
  updatePharmacyController: UpdatePharmacyController;
  deletePharmacyController: DeletePharmacyController;
  showPharmacyController: ShowPharmacyController;
  indexPharmacyController: IndexPharmacyController;
};

const container = awilix.createContainer<Cradle>({
  injectionMode: awilix.InjectionMode.CLASSIC,
});

container.register({
  // Repositories
  pharmacyRepository: awilix.asClass(PharmacyRepository).singleton(),

  // Use cases
  createPharmacyUseCase: awilix.asClass(CreatePharmacyUseCase).singleton(),
  updatePharmacyUseCase: awilix.asClass(UpdatePharmacyUseCase).singleton(),
  deletePharmacyUseCase: awilix.asClass(DeletePharmacyUseCase).singleton(),
  showPharmacyUseCase: awilix.asClass(ShowPharmacyUseCase).singleton(),
  indexPharmacyUseCase: awilix.asClass(IndexPharmacyUseCase).singleton(),

  // Controllers
  createPharmacyController: awilix
    .asClass(CreatePharmacyController)
    .singleton(),
  updatePharmacyController: awilix
    .asClass(UpdatePharmacyController)
    .singleton(),
  deletePharmacyController: awilix
    .asClass(DeletePharmacyController)
    .singleton(),
  showPharmacyController: awilix.asClass(ShowPharmacyController).singleton(),
  indexPharmacyController: awilix.asClass(IndexPharmacyController).singleton(),
});

export { container };
