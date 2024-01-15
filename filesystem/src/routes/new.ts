import { Router } from "express";
import { Request, Response } from "express";
import fs from "fs-extra";
import path from "path";
import { File } from "../types/file";
import { Folder } from "../types/folder";
import { errorHandler } from "../middleware/error-handler";
import { FileNotFound } from "../errors/not-found-error";
import { ValidationError } from "../errors/validation-error";
import { RenderingError } from "../errors/rendering-error";
import { ApiResponse } from "../types/api-response";
const router = Router();
// route for new files
router.post(
  "/api/files/new",
  errorHandler,
  async (req: Request, res: Response) => {
    const reqBody: File = req.body;

    // add verification for invalid folder names and locations

    var location = path.join(__dirname, "../directory/", reqBody.location);

    await fs.ensureDir(location);

    try {
      await fs.promises.writeFile(
        path.join(location, reqBody.fileName),
        reqBody.contents
      );
    } catch (err) {
      throw new FileNotFound("Couldn't complete operation.");
    }
  }
);

// route for new directory
router.post("/api/folder/new", async (req: Request, res: Response) => {
  const reqBody: Folder = req.body;

  // add verification for invalid folder names and locations

  var location = path.join(
    __dirname,
    "../directory",
    reqBody.location,
    reqBody.folderName
  );
  try {
    // add check to see given folder already exists
    await fs.ensureDir(location);
  } catch (err) {
    throw new ValidationError(
      "Couldn't create folder ",
      reqBody.folderName,
      " at " + reqBody.location
    );
  }
  res.status(201).send({ message: "Implemented" } satisfies ApiResponse);
});

export { router as NewFileRouter };
