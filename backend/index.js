import express from 'express';
import { controllers } from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middlewares/error_handler_middleware.js';
import { logMiddleware } from './middlewares/log_middleware.js';

const app = express();

app.use(express.json());
app.use(logMiddleware);

controllers(app);

app.use(errorHandlerMiddleware);

const PORT = 3000;
app.listen(
  PORT,
  () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  }
);
