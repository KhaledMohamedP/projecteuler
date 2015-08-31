/* Counting Sundays
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

var finish = new Date(2000, 11, 1);
// console.log(finishs)
// console.log()
var sumOfSundays = 0,
    i = 1;

for (var i = 1901; i <= 2000; i++) {
    for (var j = 0; j <= 11; j++) {
        var start = new Date(i, j, 1);
        
        // getDay() returns 0-6 based on Sunday - Saturday respectively 
        if (start.getDay() == 0) {
            sumOfSundays++;
        }
    }
}



console.log(sumOfSundays)
