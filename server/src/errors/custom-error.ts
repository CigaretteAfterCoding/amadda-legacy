export abstract class CustomError extends Error {
  public abstract statusCode: number;

  constructor(errorMessage: string) {
    super(errorMessage);
  }
}
