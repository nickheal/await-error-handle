export default function errorHandle(promise) {
  return promise
    .then((data) => [null, data])
    .catch((err) => [err]);
}
