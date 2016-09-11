# Run Function Only Once

An implementation of a wrapper to execute a function only once that is really tiny and will work on the majority of use cases.

## Install

```
npm install tiny-once
```

## Usage

Whenever you have a function that must be run only once, you can wrap that function with `tiny-once` as follows:

```js
const once = require('tiny-once')

function mustBeRunOnlyOnce() {
  // code here...
}

const wrapped = once(mustBeRunOnlyOnce)

wrapped() // executes mustBeRunOnlyOnce
wrapped() // does nothing
wrapped() // does nothing either!
```

You should also be able to use the module in the browser through [browserify](http://browserify.org/) or [webpack](https://webpack.github.io/)!

## API

### `once(fn[, options])`

- `fn` is the function that shall be run only once.
- `options` is an optional object with the following properties.
  - `context` is the object used as `this` when calling `fn`.
  - `cached` is a boolean flag that makes the calls to the wrapped function to return the original call return value instead of doing nothing when `fn` is called again.

## License

WTFPL
