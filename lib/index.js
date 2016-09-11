function once(fn, options = {}) {
  let called = false
  let result

  return function () {
    if (called) {
      return options.cached ? result : null
    }

    called = true
    return result = fn.apply(options.context || this, arguments)
  }
}

module.exports = once
