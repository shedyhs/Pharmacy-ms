import { IShowPharmacy } from '../../../domain/usecases/pharmacies/interfaces/IShowPharmacy';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class ShowPharmacyController extends BaseController {
  constructor(private readonly showPharmacyUseCase: IShowPharmacy) {
    super();
  }
  async perform({ params }: HttpRequest): Promise<HttpResponse> {
    const response = await this.showPharmacyUseCase.execute(params.id);
    return {
      statusCode: 200,
      data: response,
    };
  }
}
