export abstract class BaseError extends Error {
  constructor(message: string, fileName?: string, location?: string) {
    super(message);
    this.fileName = fileName;
    this.location = location;
    Object.setPrototypeOf(this, BaseError.prototype);
  }
  abstract statusCode: number;
  readonly fileName?: string;
  readonly location?: string;
  abstract serializeError(): { message: string };
}
