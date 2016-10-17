module.exports = buildTicker

function buildTicker(generate, period) {
  generate = generate || Math.random

  return function (end, cb) {
    if(end) return cb && cb(end)

    return setTimeout(
      function () { return cb(null, generate()) },
      period
    )
  }
}

