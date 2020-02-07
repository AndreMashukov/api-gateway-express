import { Request, Response } from 'express';
import { Logger } from '../utils/Logger';

const logger = new Logger(__filename);

export class HomeController {
  public static async get(req: Request, res: Response): Promise<void> {
    logger.debug(req.params);
    res.json({
      message: 'Home Controller'
    });
  }
}
