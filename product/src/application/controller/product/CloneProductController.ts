import { ICloneProduct } from '../../../domain/usecases/product/interfaces/ICloneProduct';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class CloneProductController extends BaseController {
  constructor(private readonly cloneProductUseCase: ICloneProduct) {
    super();
  }

  async perform({ params }: HttpRequest): Promise<HttpResponse> {
    const response = await this.cloneProductUseCase.execute({
      pharmacyId: params.pharmacyId,
      productId: params.productId,
    });
    return {
      statusCode: 201,
      data: response,
    };
  }
}
