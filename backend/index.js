import express from 'express';
import { controllers } from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middlewares/error_handler_middleware.js';
import { logMiddleware } from './middlewares/log_middleware.js';
import { addDependency } from './libs/dependencies.js';
import { UserService } from './services/user.js';
import { LoginService } from './services/login.js';
import { UserMockup } from './mockups/user.js';
import config from './config.js';

if (!config.jwtKey) {
  console.error(`No se ha definido un jwtKey en la configuración. Por favor 
cree un archivo config.local.js según se especifica en config.js.`);
  process.exit(1);
}

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

app.listen(
  config.port,
  () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
  }
);
