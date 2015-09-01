/* Factorial digit sum
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 * Find the sum of the digits in the number 100!
*/

var BigNumber = require("big-number").n;

function factorial(n){
	if(n == 1){
		return 1;
	}else{
		return BigNumber(n).mult(factorial(n - 1));
	}
}

var result = factorial(BigNumber(100)); 
var sum = result.number.reduce(function(prev, curr){return prev + curr});
console.log(sum)