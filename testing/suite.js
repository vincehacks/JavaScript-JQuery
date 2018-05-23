// Created by Vince Chang
// This is the file that runs all the tests and outputs the result to console

// Importing files into this file
const multBy2 = require('./multBy2.js');
const addParams = require('./addParams.js');
const divideBy2 = require('./divideBy2.js');

/******************************************************************************/

console.log('Function: multBy2() that takes a value and multiplies it by 2');
console.log('Testing: 2 * 6 = 12 ');
console.log(multBy2(6) === 12 ? 'success':'failure');
console.log('Testing: 2 * 6 = 13 ');
console.log(multBy2(6) === 13 ? 'success':'failure');
console.log('\n');
console.log('Function: multBy2() that should test for strings & return false');
console.log('Testing: 2 * \'hello\' = false');
console.log(multBy2('hello') === false ? 'success' : 'fail');
console.log('\n');

/******************************************************************************/

console.log('Function: addParams() that takes 2 values and adds them together');
console.log('Testing: 1 + 2 = 3 ');
console.log(addParams(1,2) === 3 ? 'success':'failure');
console.log('Testing: 1 + 2 = 4 ');
console.log(addParams(1,2) === 4 ? 'success':'failure');
console.log('Testing: -1 + 2 = 1 ');
console.log(addParams(-1,2) === 1 ? 'success':'failure');
console.log('\n');

/******************************************************************************/

console.log('Function: divideBy2() that takes a value and divides by two');
console.log('Testing: 4 / 2 = 2 ');
console.log(divideBy2(4) === 2 ? 'success':'failure');
console.log('Testing: 1 / 2 = 0.5 ');
console.log(divideBy2(1) === 0.5 ? 'success':'failure');
console.log('Testing: 10 / 2 = 4 ');
console.log(divideBy2(10) === 4 ? 'success':'failure');
console.log('\n');

/******************************************************************************/