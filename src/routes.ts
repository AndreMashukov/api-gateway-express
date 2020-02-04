import express, { Router } from 'express';
import { TestController } from './controllers/TestController';

export class Routes {
  private routes = express.Router();
  private testController: TestController;

  public getTestRoutes(): Router {
    this.testController = new TestController();
    return this.routes.get('/', this.testController.get);
  }
}
