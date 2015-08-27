/* Sum square difference
 * The sum of the squares of the first ten natural numbers is,
 * 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

/* Solution 
 * (1 + 2 + ... + 10)2 = 55 = 3025 
 * This can be shorten using Gauss rule (n (n + 1)) / 2   
 */

// sum of the squares of the first one hundred natural
var sumSquare = 0; 
for (var i = 1; i <= 100; i++) {
	sumSquare += square(i);
}

// The square of the sum
var squareSum = square(gaussFormula(100))


var difference = squareSum - sumSquare;

console.log(difference)

//Helper functions 
function gaussFormula (n) {
	return (n * (n + 1)) / 2;
}
function square (n) {
	return n * n ; 
}