import { Request, Response, NextFunction } from "express";
import { BaseError } from "../errors/base-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    console.log(err);
    return res.status(err.statusCode).send({ error: err.serializeError() });
  }
  return res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
