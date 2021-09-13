/* eslint-disable no-mixed-spaces-and-tabs */
import { CustomError } from 'Errors/custom-error';

export class DatabaseError extends CustomError {
	public statusCode = 600;
	public type = 'DATABASE_ERROR';

	constructor(errorMsg: string) {
	  super(`[Database Error] : ${errorMsg}`);
	}
}
