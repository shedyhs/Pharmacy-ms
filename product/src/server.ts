import { app } from './main/config/app';

app.listen(process.env.SERVER_PORT ?? 3001, () => {
  console.log(
    `🚀 Server running on http://localhost:${process.env.SERVER_PORT ?? 3001}`,
  );
});
