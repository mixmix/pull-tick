const test = require('tape')
const pull = require('pull-stream')

const ticker = require('./')

test('ticker', t => {
  var period = 50
  var num = 3
  var received = 0
  var start = Date.now()

  pull(
    ticker(() => 'tick', period),
    pull.take(num),
    pull.drain( 
      (data) => {
        received++
      },
      () => {
        const time = Date.now() - start
        
        t.equal(received, num, `received ${num} ticks`)
        t.ok(time > (num-1)*period && time < (num+1)*period , 'time in right neighbourhood')
        t.end()
      }
    )
  )
})

