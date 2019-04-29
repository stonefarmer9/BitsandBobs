const performance = require('perf_hooks').performance;

function sum(total, number) {
  return total + number
}

var t = performance.now()

var b = [1,2,3,4,5]

b.reduce(sum)

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t) + " milliseconds.");
