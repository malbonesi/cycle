var test = require('tape')
var cycle = require('../dist/cycle')

test('cycle', t => {
  for(let length = 1; length <= 4; length++){

    let array = Array.from({length})

    t.equal(cycle(array, (e,i) => i == 0), length > 1 ? 1 : 0 , 'Cycles forward')
    t.equal(cycle(array, (e,i) => i == 1, -1), 0, 'Cycles backward')
    
    t.equal(cycle(array, (e,i) => i == length - 1), 0, 'Cycles to beginning of array')
    t.equal(cycle(array, (e,i) => i == 0, -1), length - 1, 'Cycles to end of array')

    t.equal(cycle(array, e => false), 0, 'Test not found forward starts at 0')
    t.equal(cycle(array, e => false, -1), length - 1, 'Test not found backward starts at length - 1')

  }

  t.end()
})
