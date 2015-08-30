/* Power digit sum
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 21000?
 */

//Use bignumber library to help-out with giant numbers  
var BigNumber = require('big-number').n;

//returns all the digits of 2^1000 as an array of integer 
var digits = BigNumber(2).pow(1000).number;

//add all numbers using reduce 
var sum = digits.reduce(function(prev, curr) {
	return prev += curr; 
});

console.log(sum)
