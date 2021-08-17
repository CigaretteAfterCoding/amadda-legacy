import { pool } from 'Connection/connection';
import { databaseErrorHandler } from 'Utils/error-handler';
import { promiseHandler } from 'Utils/promise-handler';

export async function queryExecutor(query: string): Promise<any> {
  const connection = await pool.getConnection();
  const [queryResult, error] = await promiseHandler(connection.query(query));
  databaseErrorHandler(error);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, _] = queryResult;
  connection.release();

  if (/^insert/i.test(query.trimStart())) {
    return result.insertId;
  }

  return result;
}
