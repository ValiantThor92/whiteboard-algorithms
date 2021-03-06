// const Benchmark = require('benchmark');

// const suite = new Benchmark.Suite;

// suite
//   .add('random test', function() {
//     // benchmark generating a random number
//     Math.floor(Math.random() * 10) + 1;
//   })
//   .on('complete', function() {
//     console.log(this);
//   })
//   .run();


// const Benchmark = require('benchmark');
// const { linearSearch, binarySearch } = require('./search');

// const numbers = [];
// for (let i = 1; i <= 1000000; i++) {
//   // populate the array with the numbers 1 to 1,000,000
//   numbers.push(i);
// }

// // grab the last number in the array as the number we want to find
// // const target = numbers[numbers.length-1];
// const target = numbers[0];

// const suite = new Benchmark.Suite;

// suite
//   .add('linear search', function() {
//     linearSearch(numbers, target);
//   })
//   .add('binary search', function() {
//     binarySearch(numbers, target, 0, numbers.length-1)
//   })
//   .on('complete', function() {
//     // loop over and print each result
//     this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
//   })
//   .run();


// const Benchmark = require('benchmark');
// const { bubbleSort } = require('./sort');

// // const numbers = [];
// // for (let i = 0; i < 20000; i++) {
// //   numbers.push(Math.floor(Math.random() * 10000) + 1);
// // }

// const numbers = [];
// for (let i = 0; i < 40000; i++) {
//   numbers.push(Math.floor(Math.random() * 10000) + 1);
// }

// const suite = new Benchmark.Suite;

// suite
//   .add('quick sort', function() {
//     const testArray = [...numbers];

//     quickSort(testArray);
//   })
//   .add('js sort', function() {
//     const testArray = [...numbers];

//     // benchmark the built-in sort method
//     testArray.sort((a, b) => {
//       return a - b;
//     });
//   })
//   .on('complete', function() {
//     this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
//   })
//   .run();


const Benchmark = require('benchmark');
const { mostDuplicates, optimizedDuplicates } = require('./dupes');

const numbers = [];
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
  .add('duplicates test', function() {
    mostDuplicates(numbers);
  })
  .add('optimizedDuplicates', function() {
    optimizedDuplicates(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();