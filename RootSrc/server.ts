import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
const port = 3000;

//import route from "./routes";
const route = require("./routes");
app.use(route);

console.log("pog");

//serve anything in the static folder as is
app.use(express.static(path.join(__dirname, "../static")));

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
