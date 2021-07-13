import { Request, Response } from "express";

const db = require("../migrate/models/index.js");
const murmurs = db.murmurs;

export default {
  create: (req: Request, res: Response) => {
    const body = req.body;

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
