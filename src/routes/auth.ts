import passport from "passport";

import { Router, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";
import murmursController from "src/controllers/murmurs.controller";

export const createAuthRouter = () => {
  const router = Router();

  router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "ok.html",
      failureRedirect: "login.html",
      session: false,
    })
  );
};
