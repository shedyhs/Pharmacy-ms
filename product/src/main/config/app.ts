import express from 'express';
import path from 'path';
import productsRouter from '../routes/products.routes';
import { globalErrorHandling } from '../../shared/errors/globalErrorHandling';

const app = express();

app.use(
  '/public',
  express.static(path.resolve(__dirname, '..', '..', '..', 'public')),
);

app.use(express.json());

app.use(productsRouter);
app.use(globalErrorHandling);

export { app };
