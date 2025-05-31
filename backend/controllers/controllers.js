import { login } from './login.js';
import { user } from './user.js';

export function controllers(app) {
  login(app);
  user(app);
}