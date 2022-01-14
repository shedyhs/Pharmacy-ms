/* eslint-disable no-console */
import { RequestHandler } from 'express';
import { BaseController } from '../../application/controller/BaseController';

type Adapter = (controller: BaseController) => RequestHandler;

export const expressAdaptRoute: Adapter = (controller) => async (req, res) => {
  const { statusCode, data } = await controller.handle({
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers,
  });
  const successStatusCode = statusCode >= 200 && statusCode < 300;
  const response = successStatusCode ? data : { error: data };
  return res.status(statusCode).json(response);
};
