/* Longest Collatz sequence
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 * Using the rule above and starting with 13, we generate the following sequence:
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * Which starting number, under one million, produces the longest chain?
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

var lrgChain = {
        list: [],
        number: 0
    };
var ONE_MILLION = 1000000;

for (var i = 0; i < ONE_MILLION; i++) {
    var list = createChain(i);

    if (list.length > lrgChain.list.length) {
        lrgChain.list = list;
        lrgChain.number = i;
    }
}

console.log(lrgChain.number)

// Helper functions 
function createChain(number) {
    var list = [number];

    while (number > 1) {
        if (isEven(number)) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
        list.push(number);
        
    }

    return list
}

function isEven(n) {
    return n % 2 == 0;
}
