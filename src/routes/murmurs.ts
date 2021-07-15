import { Router, Request, Response } from 'express';
import { body, param, validationResult } from 'express-validator';
import murmursController from 'src/controllers/murmurs.controller';

export const createMurmursRouter = () => {
  const router = Router();

  router.post("/:userId/murmurs/", [
    body('text').notEmpty(),
    param('userId').isInt()
  ], murmursController.create);

  router.get("/:userId/murmurs/", [
    param('userId').isInt()
  ], murmursController.getMurmursByUserId);
  return router;
};
