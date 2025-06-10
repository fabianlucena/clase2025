import express from 'express';
import { controllers } from '../controllers/controllers.js';
import { errorHandlerMiddleware } from './error_handler_middleware.js';
import { logMiddleware } from './log_middleware.js';
import { authorizationMiddleware } from './authorization_middleware.js';

export default function configureMiddlewares(router) {
  router.use(express.json());
  router.use(logMiddleware);
  router.use(authorizationMiddleware);
  
  controllers(router);
  
  router.use(errorHandlerMiddleware);
}
