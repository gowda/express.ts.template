import { Request, Response } from 'express';

export const index = (_req: Request, res: Response) => {
  res.render('greet');
};
