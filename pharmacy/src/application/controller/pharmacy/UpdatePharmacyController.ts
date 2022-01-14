import { IUpdatePharmacy } from '../../../domain/usecases/pharmacies/interfaces/IUpdatePharmacy';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class UpdatePharmacyController extends BaseController {
  constructor(private readonly updatePharmacyUseCase: IUpdatePharmacy) {
    super();
  }

  async perform({ body, params }: HttpRequest): Promise<HttpResponse> {
    const response = await this.updatePharmacyUseCase.execute(params.id, body);
    return {
      statusCode: 200,
      data: response,
    };
  }
}
