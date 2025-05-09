import { loginService } from '../services/login.js';

export function login(app) {
  app.post(
    '/login',
    (req, res) => {
      const result = loginService(
        req.body?.username,
        req.body?.password,
      );

      res.send(result);
    }
  );
}