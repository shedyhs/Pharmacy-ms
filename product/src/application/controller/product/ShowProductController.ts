import { IShowProduct } from '../../../domain/usecases/product/interfaces/IShowProduct';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class ShowProductController extends BaseController {
  constructor(private readonly showProductUseCase: IShowProduct) {
    super();
  }
  async perform({ params }: HttpRequest): Promise<HttpResponse> {
    const response = await this.showProductUseCase.execute(params.id);
    return {
      statusCode: 200,
      data: response,
    };
  }
}
