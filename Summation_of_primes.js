/* Summation of primes
 * Problem 10
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
*/

var sum = 0; 

for (var i = 2; i < 2000000; i++) {
	if(isPrime(i)){
		sum += i; 
	}
}

console.log(sum)

function isPrime(n) {
    if (n === 1) {
        return false
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
