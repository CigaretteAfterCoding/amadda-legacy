import { CustomError } from 'Errors/custom-error';

export class InsufficientBodyError extends CustomError {
	public statusCode = 400;

	constructor(key: string) {
	  super(`[Insufficient]body should have [${key}] value`);
	}
}
