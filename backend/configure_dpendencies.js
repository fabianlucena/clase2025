import { addDependency } from './libs/dependencies.js';
import { UserService } from './services/user.js';
import { LoginService } from './services/login.js';
import UserModel from './models/user.js';

export default function configureDependencies() {
  addDependency('UserService', UserService);
  addDependency('LoginService', LoginService);
  addDependency('UserModel', UserModel);
}