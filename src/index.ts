export default function errorHandle<T>(promise: Promise<T>): Promise<[null, T] | [any, undefined]> {
  return promise
    .then(result => [null, result] as [null, T])
    .catch(error => [error, undefined]);
}

export {
  errorHandle
}
