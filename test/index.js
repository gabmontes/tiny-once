const { expect } = require('chai')

const once =require('../lib')

describe('Once', function () {
  it('should call the function only once', function () {
    let times = 0
    function test() {
      times++
    }
    const testOnce = once(test)
    testOnce()
    testOnce()
    expect(times).to.equal(1)
  })

  it('should call the function only once in a different context', function () {
    const context = {
      times: 0
    }
    function test() {
      this.times += 1
    }
    const testOnce = once(test, { context })
    testOnce()
    testOnce()
    expect(context.times).to.equal(1)
  })

  it('should call the function only once and keep returning the same value', function () {
    let times = 0
    function test() {
      return ++times
    }
    const testOnce = once(test, { cached: true })
    expect(testOnce()).to.equal(1)
    expect(testOnce()).to.equal(1)
    expect(times).to.equal(1)
  })
})
