import express, { Application, Request, Response, NextFunction } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

module.exports = router;
