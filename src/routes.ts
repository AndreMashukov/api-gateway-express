import express, { Router } from 'express';
import { HomeController, TestController } from './controllers';

export class Routes {
  private routes = express.Router();

  constructor() {
    this.routes.get('/', HomeController.get);
    this.routes.get('/test', TestController.get);
  }

  public getAllRoutes(): Router {
    return this.routes;
  }
}
