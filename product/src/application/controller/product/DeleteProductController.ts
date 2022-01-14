import { IDeleteProduct } from '../../../domain/usecases/product/interfaces/IDeleteProduct';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class DeleteProductController extends BaseController {
  constructor(private readonly deleteProductUseCase: IDeleteProduct) {
    super();
  }
  async perform({ params }: HttpRequest): Promise<HttpResponse> {
    await this.deleteProductUseCase.execute(params.id);
    return {
      statusCode: 204,
      data: undefined,
    };
  }
}
