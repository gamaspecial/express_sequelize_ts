import { Request, Response } from "express";
import { components } from '../models/openapi/schema';

type CreateMurmur = components["schemas"]["CreateMurmur"];

const db = require("../migrate/models/index.js");
const murmurs = db.murmurs;

export default {
  create: (req: Request, res: Response) => {

    murmurs
      .create({
        text: "test",
        postUserId: req.params.userId,
      })
      .then((murmur: typeof murmurs) => {
        console.log(murmur);
        console.log(body);
        var param = { result: "Hello World !" };
        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(param);
      });
  },
};
