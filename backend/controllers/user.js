import { UserService } from '../services/user.js';
import { checkForRole } from '../middlewares/authorization_middleware.js';

export function user(app) {
  app.get(
    '/user',
    checkForRole('admin'),
    async (req, res) => {
      const users = await UserService.get();
      const result = users.map(user => ({
        uuid: user.uuid,
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        roles: user.roles,
      }));
    
      res.send(result);
    }
  );

  app.post(
    '/user',
    checkForRole('admin'),
    async (req, res) => {
      await UserService.create(req.body);
      res.status(204).send();
    } 
  );

  app.delete(
    '/user/:uuid',
    checkForRole('admin'),
    async (req, res) => {
      await UserService.deleteByUuid(req.params.uuid);
      res.status(204).send();
    }
  );
}