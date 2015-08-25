/*
 * Largest prime factor
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

var list = [];

function primFactor(number) {
    for (var i = 1; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            if (isPrime(i)){
                list.push(i);
            }
        }
    }
}

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


primFactor(600851475143);

console.log(list);
