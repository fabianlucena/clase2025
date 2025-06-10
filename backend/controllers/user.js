import { UserService } from '../services/user.js';
import { checkForRole } from '../middlewares/authorization_middleware.js';

export function user(app) {
  app.get(
    '/user',
    checkForRole('admin'),
    async (req, res) => res.send(await UserService.get())
  );
}