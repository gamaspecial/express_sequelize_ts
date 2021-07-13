import { Router, Request, Response } from 'express';

import murmursController from 'src/controllers/murmurs.controller';

export const createMurmursRouter = () => {
  const router = Router();

  router.post("/", murmursController.create);
  return router;
};
