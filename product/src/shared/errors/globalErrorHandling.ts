import { CelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';

export async function globalErrorHandling(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) {
  if (error instanceof CelebrateError) {
    let errorMessage = error.details.values().next().value.details[0]
      .message as string;
    errorMessage = errorMessage.replaceAll('"', '');

    console.log(errorMessage);
    return response.status(400).json({
      status: 'error',
      message: errorMessage,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  });
}
