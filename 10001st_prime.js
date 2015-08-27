/* 10001st prime
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */


var i = 1,
    index = 0,
    LIMIT = 10001,
    found;

while (true) {
    if (isPrime(i)) {
        index++;
        if (index == LIMIT) {
            found = i;
            break;
        }
    }

    i++;
}

console.log(found)

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
