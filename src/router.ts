import { Router, Request, Response } from 'express';
export const createRouter = () => {
  const router = Router();

  router.post('/healthcheck', (req: Request, res: Response) => {
    if (req.body.ping) {
      res.status(200).json({ message: 'pong21' });
    } else {
      res.status(400).json({ message: 'please post application/json \'{"ping": true}\'' });
    }
  });
  return router;
};
