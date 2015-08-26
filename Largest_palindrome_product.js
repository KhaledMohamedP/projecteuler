/*
 * Largest palindrome product
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

//the largest number of the product of two digit 99 x 99 = 9801
//for three digits it will be 999 x 999 = 998001 and low value 100 x 100 = 10 000
var LIMIT = 998001;
var LOW = 10000;
var RESULT = '';

(function main() {
    var list = palindromeList(); 
    for (var i = 0; i < list.length; i++) {
    	if(threeDigitProduct(list[i])){
    		console.log('The largest palindrome made from the product of two 3-digit numbers');
    		console.log(list[i]);
    		console.log(RESULT);
    		break;
    	}
    };
})()

function palindromeList() {
    var list = [];
    for (var i = LIMIT; i > LOW ; i--) {
        if (isPalindrome(i.toString())) {
            list.push(i);
        }
    }
    return list;
}

function threeDigitProduct(n) {
    for (var i = 100; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            var x = n / i,
                xStr = x.toString(),
                iStr = i.toString();
            if (xStr.length == 3 && iStr.length == 3) {
            	RESULT = xStr + ', ' + iStr
                return true;
            }
        }
    }
    return false;
}

function isPalindrome(str) {
    for (var i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
