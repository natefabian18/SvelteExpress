import express, { Application, Request, Response, NextFunction } from "express";
import sirv from "sirv";
const router = express.Router();

//root url req
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

//serve favicon.ico and favicon.png
router.use(express.static("./Favicon"));

//serve any static assets in static
router.use("/static", express.static("./static"));

//server anything in svelte as the svelte app
router.use("/svelte", express.static("./Svelte/public"));

module.exports = router;
