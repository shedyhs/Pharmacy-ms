import { IUpdateProduct } from '../../../domain/usecases/product/interfaces/IUpdateProduct';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class UpdateProductController extends BaseController {
  constructor(private readonly updateProductUseCase: IUpdateProduct) {
    super();
  }

  async perform({ body, params }: HttpRequest): Promise<HttpResponse> {
    const response = await this.updateProductUseCase.execute(params.id, body);
    return {
      statusCode: 200,
      data: response,
    };
  }
}
