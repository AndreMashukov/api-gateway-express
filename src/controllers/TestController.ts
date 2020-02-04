import { Request, Response } from 'express';

export class TestController {
  public get(req: Request, res: Response): void {
    // tslint:disable-next-line: no-console
    console.log(req.params);
    res.json({
      message: 'Test Controller'
    });
  }
}
