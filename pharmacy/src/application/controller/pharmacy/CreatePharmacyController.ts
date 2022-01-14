import { ICreatePharmacy } from '../../../domain/usecases/pharmacies/interfaces/ICreatePharmacy';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class CreatePharmacyController extends BaseController {
  constructor(private readonly createPharmacyUseCase: ICreatePharmacy) {
    super();
  }

  async perform({ body }: HttpRequest): Promise<HttpResponse> {
    const response = await this.createPharmacyUseCase.execute(body);
    return {
      statusCode: 201,
      data: response,
    };
  }
}
