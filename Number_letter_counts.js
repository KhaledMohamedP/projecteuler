/* Number letter counts
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 */

var base = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
var _ed = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
var _ty = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
var _en = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

// Start with onethousand since it has been excluded in my convertNumToStr func
var sum = 'onethousand'.length;

for (var i = 1; i < 1000; i++) {
    var result = convertNumToStr(i);
    sum += strLength(result);
};

console.log(sum)


function convertNumToStr(i){
    var strNumber, firstDigit, secondDigit, thirdDigit, result;
    strNumber = i.toString();
    if(i > 0 && i < 10){
        result = [base[i]];
    }else if (i >= 10 && i < 20) {
        result = [_en[i % 10]]
    }else if (i >= 20 && i < 100) {
        firstDigit = strNumber[0];
        secondDigit = strNumber[1];
        result = [_ty[firstDigit], base[secondDigit]];
    }else if (i >= 100 && i < 1000) {
        firstDigit = strNumber[0];
        secondDigit = strNumber[1];
        thirdDigit = strNumber[2];
        if (secondDigit == 0 && thirdDigit == 0) {
            result = [_ed[firstDigit]]
        } else if (secondDigit == 1) {
            result = [_ed[firstDigit], ' and ' + _en[thirdDigit]];
        } else {
            result = [_ed[firstDigit], ' and ' + _ty[secondDigit]+'-'+ base[thirdDigit]];
        }
    }
    return result.join(''); 
}


function strLength(s) {
    // count letters without extra spaces or hyphens
    return s.replace(/\s+|[-]/g, '').length;
}
