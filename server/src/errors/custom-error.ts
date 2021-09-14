export abstract class CustomError extends Error {
  public abstract statusCode: number;
  public abstract type: string;

  constructor(errorMessage: string) {
    super(errorMessage);
  }
}
