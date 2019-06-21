"use strict";
// Task#1
function isInArray(arg1, ...arg2) {
    for (var i = 0; i < arg1.length; i++) {
        for (var j = 0; j < arg2.length; j++) {
            if (arg1[i] === arg2[j])
                return true;
        }
        // return false;
    }
    return false;
}
console.log(isInArray([1, 4, 6], 2, 8, 5));
console.log(isInArray([1, 4, 6], 2, 3, 5, 0, 8, 6));
// Task#2
function summator(...arg) {
    var result;
    var sum, current, number;
    result = arg.reduce(function (sum, current) {
        return sum + current;
    });
    return result;
}
console.log(summator(1, 2, 3, 4));
