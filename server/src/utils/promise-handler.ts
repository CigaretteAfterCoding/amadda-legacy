export async function promiseHandler<T>(promise: Promise<T>): Promise<any> {
  return promise
    .then((data: T) => [data, null])
    .catch((error) => [null, error]);
}
