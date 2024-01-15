import { Router } from "express";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { File } from "../types/file";
const router = Router();

router.get("/api/files", (req: Request, res: Response) => {
  // return the list of all files of the user, along with their locations
});

export { router as GetFilesRouter };
