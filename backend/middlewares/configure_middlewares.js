import express from 'express';
import { controllers } from '../controllers/controllers.js';
import { errorHandlerMiddleware } from './error_handler_middleware.js';
import { logMiddleware } from './log_middleware.js';
import { authorizationMiddleware } from './authorization_middleware.js';
import { corsModdleware } from './cors_middleware.js';
import config from '../config.js';

export default function configureMiddlewares(router) {
  router.use(express.json());
  router.use(logMiddleware);
  router.use(authorizationMiddleware);
  if (config.cors) {
    router.use(corsModdleware);
  }
  
  controllers(router);
  
  router.use(errorHandlerMiddleware);
}
