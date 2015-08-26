/*
##Question:
	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
	-> Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
Approach # 1
	One way to solve this problem is by scanning each number under value (1000) and check for mod 3 & 5 to equals to 0. If the condition is true we add the number to the sum variable.
*/

function multiples(num) {
	var sum = 0;
    for (var i = num - 1; i >= 0; i--) {
    	if( i % 3 == 0 || i % 5 == 0 ){
    		sum += i; 
    	}
    }
    return sum;
}

console.log(multiples(1000))

/*
Approach # 2
	
*/