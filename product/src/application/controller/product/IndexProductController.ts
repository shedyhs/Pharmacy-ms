import { IIndexProduct } from '../../../domain/usecases/product/interfaces/IIndexProduct';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class IndexProductController extends BaseController {
  constructor(private readonly indexProductUseCase: IIndexProduct) {
    super();
  }
  async perform(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { page, limit } = httpRequest.query;
    const response = await this.indexProductUseCase.execute({ page, limit });
    return {
      statusCode: 200,
      data: response,
    };
  }
}
