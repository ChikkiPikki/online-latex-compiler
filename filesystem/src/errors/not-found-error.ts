import { BaseError } from "./base-error";

export class FileNotFound extends BaseError {
  statusCode = 404;
  serializeError = () => {
    return { message: "The requested file was not found" };
  };
}

export class FolderNotFound extends BaseError {
  statusCode = 404;
  serializeError = () => {
    return { message: "The requested folder was not found" };
  };
}
