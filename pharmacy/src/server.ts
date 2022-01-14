import { app } from './main/config/app';
import './main/grpc/server';

app.listen(process.env.SERVER_PORT ?? 3000, () => {
  console.log(
    `🚀 HTTP Server running on http://localhost:${
      process.env.SERVER_PORT ?? 3000
    }`,
  );
});
