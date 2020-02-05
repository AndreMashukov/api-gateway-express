import express, { Router } from 'express';
import { HomeController, TestController } from './controllers';

export class Routes {
  public static getAllRoutes(): Router {
    const routes = express.Router();
    routes.get('/', HomeController.get);
    routes.get('/test', TestController.get);

    return routes;
  }
}
