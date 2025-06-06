import jwt from 'jsonwebtoken';
import config from '../config.js';

export function authorizationMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) {
    next();
    return;
  }

  const scheme = auth
    .substring(0, 7)
    .toUpperCase();
  if (scheme !== 'BEARER ') {
    throw new Error('Invalid authorization scheme');
  }

  const token = auth
    .substring(7)
    .trim();

  const data = jwt.verify(token, config.jwtKey);

  req.session = data;
    
  next();
}