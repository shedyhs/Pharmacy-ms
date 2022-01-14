import { IDeletePharmacy } from '../../../domain/usecases/pharmacies/interfaces/IDeletePharmacy';
import { HttpRequest, HttpResponse } from '../../../shared/http/Http';
import { BaseController } from '../BaseController';

export class DeletePharmacyController extends BaseController {
  constructor(private readonly deletePharmacyUseCase: IDeletePharmacy) {
    super();
  }
  async perform({ params }: HttpRequest): Promise<HttpResponse> {
    await this.deletePharmacyUseCase.execute(params.id);
    return {
      statusCode: 204,
      data: undefined,
    };
  }
}
