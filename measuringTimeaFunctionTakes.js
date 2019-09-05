const performance = require('perf_hooks').performance;

function sum(total, number) {
  return total + number
}
//begin timing now
var t = performance.now()

var b = [1,2,3,4,5]

b.reduce(sum)

var t1 = performance.now()
// end timing of operation
console.log("Call to doSomething took " + (t1 - t) + " milliseconds.");
// we find out how long it took by subtracting the end result from the first result. 
// this takes two timestamps which allows us to measure how long something took.
