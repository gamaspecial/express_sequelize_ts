import { Request, Response } from "express";
import { components } from '../models/openapi/schema';
import { validationResult } from 'express-validator';

type CreateMurmur = components["schemas"]["CreateMurmur"];

const db = require("../migrate/models/index.js");
const murmurs = db.murmurs;

export default {
  create: (req: Request, res: Response) => {

    // todo:
    // length validate

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const body: CreateMurmur = req.body;

    return murmurs
      .create({
        text: body.text,
        postUserId: req.params.userId,
      })
      .then((murmur: typeof murmurs) => {
        console.log(murmur);

        res.header("Content-Type", "application/json; charset=utf-8");
        res.sendStatus(201);
      // }).catch((e) => {
        // res.
        // res.sendStatus(500);
      });
  },

  getMurmursByUserId: (req: Request, res: Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // todo:
    // limit
    // utc
    // date format
    // user followerf
    return murmurs
      .findAll({
        where: { postUserId: req.params.userId },
        order: [['updatedAt', 'DESC']],
      })
      .then((murmur: typeof murmurs[]) => {
        console.log(murmur);

        res.header("Content-Type", "application/json; charset=utf-8");
        res.json(murmur);
        res.sendStatus(200);
      });
  },
};
