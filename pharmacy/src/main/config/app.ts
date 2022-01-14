import express from 'express';
import path from 'path';
import { globalErrorHandling } from '../../shared/errors/globalErrorHandling';
import pharmacyRouter from '../routes/pharmacy.routes';

const app = express();

app.use(
  '/public',
  express.static(path.resolve(__dirname, '..', '..', '..', 'public')),
);

app.use(express.json());

app.use(pharmacyRouter);
app.use(globalErrorHandling);

export { app };
