# pull-tick

This is a modification of pull-infinite.

```js
tick( generete, period )
```
where: 
 - `generate` is some `function()` that generates data
 - `period` is the period with which this happens (in ms)

Tick returns a pull-source. 

```js
var pull = require('pull-stream')
var tick = require('pull-tick')

pull(
  tick( () => 'tick', 1000 ),
  pull.take(20),
  pull.drain( 
    (data) => console.log(Date.now(), `received ${data}`),
    () => console.log('thank god the ticking has stopped')
  )
)
```

Note the useful [pull.take](https://pull-stream.github.io/#take), which allows us to take only the first `n` of the possible infinite ticks.

