//express to handle requests
import express, { Application, Request, Response, NextFunction } from "express";
//path for including files
import path from "path";
//express app
const app = express();
//port
const port = 3000;

//import route from "./route";
const route = require("./route");
app.use(route);

//serve anything in the static folder as is
app.use(express.static(path.join(__dirname, "../Static")));

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
