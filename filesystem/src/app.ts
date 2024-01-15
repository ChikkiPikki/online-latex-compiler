import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "express-async-errors";
import { NewFileRouter } from "./routes/new";
import { GetFilesRouter } from "./routes/get-contents";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(NewFileRouter);
app.use(GetFilesRouter);

export { app };
