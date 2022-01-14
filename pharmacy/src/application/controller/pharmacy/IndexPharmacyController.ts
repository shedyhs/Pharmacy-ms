import { IIndexPharmacy } from '../../../domain/usecases/pharmacies/interfaces/IIndexPharmacy';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class IndexPharmacyController extends BaseController {
  constructor(private readonly indexPharmacyUseCase: IIndexPharmacy) {
    super();
  }
  async perform(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { page, limit } = httpRequest.query;
    const response = await this.indexPharmacyUseCase.execute({ page, limit });
    return {
      statusCode: 200,
      data: response,
    };
  }
}
