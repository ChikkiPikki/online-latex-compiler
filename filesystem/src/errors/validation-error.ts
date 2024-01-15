import { BaseError } from "./base-error";

export class ValidationError extends BaseError {
  // Throw this error when corrupted file or too large file
  // or some invalidation
  statusCode = 404;
  serializeError = () => {
    return {
      message:
        "Couldn't find/created requested resource: " +
        this.message +
        " " +
        this.fileName +
        " " +
        this.location,
    };
  };
}
