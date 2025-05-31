import { UserService } from '../services/user.js';

export function user(app) {
  app.get(
    '/user',
    async (req, res) => res.send(await UserService.get())
  );
}