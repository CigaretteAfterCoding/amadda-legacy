import { pool } from 'Connection/connection';
import { databaseErrorHandler } from 'Utils/error-handler';
import { promiseHandler } from 'Utils/promise-handler';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function queryExecutor(query: string): Promise<any> {
  const connection = await pool.getConnection();
  const [queryResult, error] = await promiseHandler(connection.query(query));
  databaseErrorHandler(error);

  const [result, _] = queryResult;
  connection.release();

  if (/^insert/i.test(query.trimStart())) {
    console.log(result);
    return result.insertId;
  }

  return result;
}
