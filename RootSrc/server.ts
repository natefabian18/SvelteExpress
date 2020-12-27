import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

//import route from "./routes";
const route = require("./routes");
app.use(route);

//serve anything in the static folder as is
//app.use(express.static(path.join(__dirname, "../static")));

app.listen(port, () => {
  console.log(`http://localhost:3000`);
  console.log(`server running on ${port}`);
});
