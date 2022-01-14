import { ICreateProduct } from '../../../domain/usecases/product/interfaces/ICreateProduct';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class CreateProductController extends BaseController {
  constructor(private readonly createProductUseCase: ICreateProduct) {
    super();
  }

  async perform({ body }: HttpRequest): Promise<HttpResponse> {
    const response = await this.createProductUseCase.execute(body);
    return {
      statusCode: 201,
      data: response,
    };
  }
}
