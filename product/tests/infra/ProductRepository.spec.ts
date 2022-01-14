import { randomUUID } from 'crypto';
import { prismaMock } from '../../singleton';
import { IProductRepository } from '../../src/domain/contracts/IProductRepository';
import { Product } from '../../src/domain/entities/product/Product';
import { ProductRepository } from '../../src/infra/repositories/ProductRepository';
import { fakeProductData } from '../mocks/entities/FakeProduct';

describe('ProductRepository', () => {
  let sut: IProductRepository;
  let productId: string;
  beforeEach(() => {
    sut = new ProductRepository();
    productId = randomUUID();
  });

  describe('Create', () => {
    it('should be able to create a new product ', async () => {
      const product = new Product({ id: productId, ...fakeProductData });
      prismaMock.product.create.mockResolvedValue({
        id: productId,
        ingredients: product.ingredients,
        others: product.others,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        availability: product.availability,
        volume: product.volume,
        pharmacy_id: product.pharmacyId,
      });
      await sut.create(product);
      expect(prismaMock.product.create).toHaveBeenCalledWith({
        data: {
          id: productId,
          ingredients: fakeProductData.ingredients,
          others: fakeProductData.others,
          name: fakeProductData.name,
          price: fakeProductData.price,
          thumbnail: fakeProductData.thumbnail,
          availability: fakeProductData.availability,
          volume: fakeProductData.volume,
          pharmacy_id: fakeProductData.pharmacyId,
        },
      });
    });
  });

  describe('Clone', () => {
    it('should be able to clone a product ', async () => {
      const product = new Product({ id: productId, ...fakeProductData });
      prismaMock.product.create.mockResolvedValue({
        id: productId,
        ingredients: product.ingredients,
        others: product.others,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        availability: product.availability,
        volume: product.volume,
        pharmacy_id: product.pharmacyId,
      });
      await sut.clone(product, fakeProductData.pharmacyId);
      expect(prismaMock.product.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          ingredients: fakeProductData.ingredients,
          others: fakeProductData.others,
          name: fakeProductData.name,
          price: fakeProductData.price,
          thumbnail: fakeProductData.thumbnail,
          availability: fakeProductData.availability,
          volume: fakeProductData.volume,
          pharmacy_id: fakeProductData.pharmacyId,
        }),
      });
    });
  });

  describe('Update', () => {
    it('Should be able to update already existent product', async () => {
      const product = new Product({ id: productId, ...fakeProductData });
      prismaMock.product.update.mockResolvedValue({
        id: productId,
        ingredients: fakeProductData.ingredients,
        others: fakeProductData.others,
        name: fakeProductData.name,
        price: fakeProductData.price,
        thumbnail: fakeProductData.thumbnail,
        availability: fakeProductData.availability,
        volume: fakeProductData.volume,
        pharmacy_id: fakeProductData.pharmacyId,
      });
      await sut.update(product);
      expect(prismaMock.product.update).toHaveBeenCalledWith({
        data: {
          ingredients: fakeProductData.ingredients,
          others: fakeProductData.others,
          name: fakeProductData.name,
          price: fakeProductData.price,
          thumbnail: fakeProductData.thumbnail,
          availability: fakeProductData.availability,
          volume: fakeProductData.volume,
        },
        where: { id: productId },
      });
    });
  });

  describe('Delete', () => {
    it('Should be able to delete a existent product ', async () => {
      prismaMock.product.delete.mockResolvedValue({
        id: productId,
        ingredients: fakeProductData.ingredients,
        others: fakeProductData.others,
        name: fakeProductData.name,
        price: fakeProductData.price,
        thumbnail: fakeProductData.thumbnail,
        availability: fakeProductData.availability,
        volume: fakeProductData.volume,
        pharmacy_id: fakeProductData.pharmacyId,
      });
      await sut.delete(productId);
      expect(prismaMock.product.delete).toHaveBeenCalledWith({
        where: { id: productId },
      });
    });
  });

  describe('FindById', () => {
    it('Should be able to show a existent product ', async () => {
      prismaMock.product.findUnique.mockResolvedValue({
        id: productId,
        ingredients: fakeProductData.ingredients,
        others: fakeProductData.others,
        name: fakeProductData.name,
        price: fakeProductData.price,
        thumbnail: fakeProductData.thumbnail,
        availability: fakeProductData.availability,
        volume: fakeProductData.volume,
        pharmacy_id: fakeProductData.pharmacyId,
      });
      await sut.findById(productId);
      expect(prismaMock.product.findUnique).toHaveBeenCalledWith({
        where: { id: productId },
      });
    });

    it('Should not be able to show a nonexistent product ', async () => {
      const foundProduct = await sut.findById('nonexistent-id');
      expect(foundProduct).toBeUndefined();
    });
  });

  describe('FindAll', () => {
    it('Should be able to index all pharmacies', async () => {
      prismaMock.product.findMany.mockResolvedValue([
        {
          id: productId,
          ingredients: fakeProductData.ingredients,
          others: fakeProductData.others,
          name: fakeProductData.name,
          price: fakeProductData.price,
          thumbnail: fakeProductData.thumbnail,
          availability: fakeProductData.availability,
          volume: fakeProductData.volume,
          pharmacy_id: fakeProductData.pharmacyId,
        },
      ]);

      const pharmacies = await sut.findAll({});
      expect(pharmacies).toHaveProperty('results');
      expect(pharmacies.results).toHaveLength(1);
    });
  });
});
