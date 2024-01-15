import { BaseError } from "./base-error";

export class RenderingError extends BaseError {
  constructor(message: string, fileName: string, location: string) {
    super(message, fileName, location);
  }
  statusCode = 500;
  serializeError = () => {
    return {
      message:
        "Couldn't render file: " +
        this.fileName +
        "\nLocation: " +
        this.location +
        "\nError stack:" +
        this.stack,
    };
  };
}
