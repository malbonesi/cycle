var test = require('tape')
var cycle = require('../dist/cycle')

test('cycle', t => {
  const numbers = [{a:1}, {a:2, selected:true}, {a:3}]

  t.equal(cycle(numbers, e => e.selected), 2, 'Cycles forward')
  t.equal(cycle(numbers, e => e.selected, -1), 0, 'Cycles backward')
  
  t.equal(cycle(numbers, e => e.a == 3), 0, 'Cycles to beginning of array')
  t.equal(cycle(numbers, e => e.a == 1, -1), 2, 'Cycles to end of array')

  t.equal(cycle(numbers, e => e.b), 0, 'Test not found forward starts at 0')
  t.equal(cycle(numbers, e => e.b, -1), numbers.length - 1, 'Test not found backward starts at length - 1')

 t.end()
})
