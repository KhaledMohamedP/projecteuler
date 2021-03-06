/*
 * Even Fibonacci numbers
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

var fibList = [1,1]; 
var sumEven = 0; 
var FOUR_MILLIONS = 4000000; 

for (var i = 1; i < 50; i++) {
	var fibNum = fibList[i] + fibList[i - 1]; 
	fibList.push(fibNum);

	// Break if the Fibonacci number exceed four million
	if(fibNum >= FOUR_MILLIONS){
		break; 
	}

	// Add the value that are even
	if(fibNum % 2 === 0){
		sumEven += fibNum;
	}	
};

console.log(sumEven);
