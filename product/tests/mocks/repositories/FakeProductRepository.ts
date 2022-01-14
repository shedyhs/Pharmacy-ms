import { IProductRepository } from '../../../src/domain/contracts/IProductRepository';
import { Product } from '../../../src/domain/entities/product/Product';
import { IPaginatedRequest } from '../../../src/shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '../../../src/shared/interfaces/IPaginatedResponse';

export class FakeProductRepository implements IProductRepository {
  products: Product[] = [];

  async clone(product: Product, pharmacyId: string): Promise<Product> {
    const clonedProduct = new Product({
      id: product.id,
      name: product.name,
      thumbnail: product.thumbnail,
      price: product.price,
      availability: product.availability,
      volume: product.volume,
      ingredients: product.ingredients,
      others: product.others,
      pharmacyId,
    });
    this.products.push(clonedProduct);
    return clonedProduct;
  }

  async findAll({
    page = 1,
    limit = 10,
  }: IPaginatedRequest): Promise<IPaginatedResponse<Product>> {
    const minValue = (page - 1) * limit;
    const maxValue = page + limit;
    const paginatedProducts = this.products.slice(minValue, maxValue);

    return {
      results: paginatedProducts,
      total: this.products.length,
      page,
      limit,
    };
  }

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async findById(id: string): Promise<Product | undefined> {
    const foundProduct = this.products.find((product) => product.id === id);

    if (!foundProduct) {
      return undefined;
    }

    return foundProduct;
  }

  async update(product: Product): Promise<void> {
    const foundProduct = this.products.find(
      (productToUpdate) => productToUpdate.id === product.id,
    );
    if (!foundProduct) {
      return;
    }

    const index = this.products.indexOf(foundProduct);
    this.products[index] = product;
  }

  async delete(id: string): Promise<void> {
    const foundProduct = this.products.find((product) => product.id === id);
    if (!foundProduct) {
      return;
    }
    const index = this.products.indexOf(foundProduct);
    this.products.splice(index, 1);
  }
}
