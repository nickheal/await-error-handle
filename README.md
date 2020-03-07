# await-error-handle

[![Codecov Coverage](https://img.shields.io/codecov/c/github/nickheal/await-error-handle/master.svg?style=flat)](https://codecov.io/gh/nickheal/await-error-handle/)
![GitHub](https://img.shields.io/github/license/nickheal/await-error-handle)

## Purpose

await-error-handle is a package designed to simplify handling errors that come back when you `await` an async function.

## Installation

Add to your project using `npm i -S await-error-handle`

## Usage

```javascript
import errorHandle from 'await-error-handle';

const [err, res] = await errorHandle(Promise.resolve('yay'));

// err = null
// res = 'yay'
```

```javascript
import errorHandle from 'await-error-handle';

const [err, res] = await errorHandle(Promise.reject(new Error('boo')));

// err = [Error boo]
// res = undefined
```