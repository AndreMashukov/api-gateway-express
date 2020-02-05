import express, { Router } from 'express';
import { HomeController, TestController } from './controllers';

export class Routes {
  private routes = express.Router();
  private testController: TestController = new TestController();
  private homeController: HomeController = new HomeController();

  constructor() {
    this.routes.get('/', this.homeController.get);
    this.routes.get('/test', this.testController.get);
  }

  public getAllRoutes(): Router {
    return this.routes;
  }
}
