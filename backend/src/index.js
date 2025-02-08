import express from "express";
import bodyParser from "body-parser";
import { db } from "./database/index.js";
import { userRouter } from "./route/index.js";
import { authRouter } from "./route/index.js";
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/token-middleware.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(authenticateToken);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(4000, function () {
  console.log("project running in port ");
  db();
});
