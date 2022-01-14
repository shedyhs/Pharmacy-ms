import { randomUUID } from 'crypto';
import { IProductRepository } from '../../domain/contracts/IProductRepository';
import { Product } from '../../domain/entities/product/Product';
import { IPaginatedRequest } from '../../shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../shared/interfaces/IPaginatedResponse';
import prismaClient from '../prisma-client';

export class ProductRepository implements IProductRepository {
  async create(product: Product): Promise<void> {
    await prismaClient.product.create({
      data: {
        id: product.id,
        name: product.name,
        volume: product.volume,
        availability: product.availability,
        price: product.price,
        ingredients: product.ingredients,
        thumbnail: product.thumbnail,
        others: product.others,
        pharmacy_id: product.pharmacyId,
      },
    });
  }

  async findById(id: string): Promise<Product | undefined> {
    const foundProduct = await prismaClient.product.findUnique({
      where: { id },
    });

    if (!foundProduct) {
      return undefined;
    }
    return new Product({
      id: foundProduct.id,
      name: foundProduct.name,
      volume: foundProduct.volume,
      availability: foundProduct.availability,
      price: foundProduct.price,
      ingredients: foundProduct.ingredients,
      thumbnail: foundProduct.thumbnail,
      others: foundProduct.others,
      pharmacyId: foundProduct.pharmacy_id,
    });
  }

  async clone(product: Product, pharmacyId: string): Promise<Product> {
    const productClone = await prismaClient.product.create({
      data: {
        id: randomUUID(),
        name: product.name,
        availability: product.availability,
        price: product.price,
        volume: product.volume,
        ingredients: product.ingredients,
        thumbnail: product.thumbnail,
        others: product.others,
        pharmacy_id: pharmacyId,
      },
    });

    return new Product({
      id: productClone.id,
      name: productClone.name,
      availability: productClone.availability,
      price: productClone.price,
      volume: productClone.volume,
      ingredients: productClone.ingredients,
      thumbnail: productClone.thumbnail,
      others: productClone.others,
      pharmacyId: productClone.pharmacy_id,
    });
  }

  async findAll({
    page = 1,
    limit = 10,
  }: IPaginatedRequest): Promise<IPaginatedResponse<Product>> {
    const foundPharmacies = await prismaClient.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    const total = await prismaClient.product.count();
    const pharmacies = foundPharmacies.map((product) => {
      return new Product({
        id: product.id,
        name: product.name,
        volume: product.volume,
        availability: product.availability,
        price: product.price,
        ingredients: product.ingredients,
        thumbnail: product.thumbnail,
        others: product.others,
        pharmacyId: product.pharmacy_id,
      });
    });
    return {
      results: pharmacies,
      total,
      page,
      limit,
    };
  }

  async update(product: Product): Promise<void> {
    await prismaClient.product.update({
      where: { id: product.id },
      data: {
        name: product.name,
        availability: product.availability,
        price: product.price,
        volume: product.volume,
        ingredients: product.ingredients,
        thumbnail: product.thumbnail,
        others: product.others,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prismaClient.product.delete({ where: { id } });
  }
}
