/* eslint-disable no-console */
import { ApplicationError } from '../../shared/errors/ApplicationError';
import { DomainError } from '../../shared/errors/DomainError';
import { HttpRequest, HttpResponse } from '../../shared/http/Http';

export abstract class BaseController {
  abstract perform(httpRequest: HttpRequest): Promise<HttpResponse>;
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    console.log('BaseController:handle');
    try {
      const response = await this.perform(httpRequest);
      return response;
    } catch (error) {
      if (error instanceof ApplicationError) {
        console.log(error.message);
        return { data: error.message, statusCode: error.code };
      }
      if (error instanceof DomainError) {
        console.log(error.message);
        return { data: error.message, statusCode: 400 };
      }
      console.log(error);
      return {
        data: 'Internal Server Error',
        statusCode: 500,
      };
    }
  }
}
