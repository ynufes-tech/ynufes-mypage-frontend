export class Response<T> {
  constructor(
    private readonly response: T | null,
    private readonly error: ErrorType | null
  ) {
  }

  getResponse(): T | null {
    return this.response
  }

  getError(): ErrorType | null {
    return this.error
  }
}

export enum ErrorType {
  UNAUTHORIZED = "UNAUTHORIZED",
  CONNECTION_ERROR = "CONNECTION_ERROR",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}