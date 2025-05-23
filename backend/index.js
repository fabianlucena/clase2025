import express from 'express';
import { controllers } from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middlewares/error_handler_middleware.js';
import { logMiddleware } from './middlewares/log_middleware.js';
import { addDependency } from './libs/dependencies.js';
import { UserService } from './services/user.js';
import { LoginService } from './services/login.js';
import { UserMockup } from './mockups/user.js';

const app = express();

const router = express.Router();
app.use('/api', router);

router.use(express.json());
router.use(logMiddleware);

controllers(router);

router.use(errorHandlerMiddleware);

addDependency('UserService', UserService);
addDependency('LoginService', LoginService);
addDependency('UserModel', UserMockup);

const PORT = 3000;
app.listen(
  PORT,
  () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  }
);
