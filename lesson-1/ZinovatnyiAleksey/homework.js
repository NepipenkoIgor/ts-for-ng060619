"use strict";
////// Task#1
function isInArray(arg1, ...arg2) {
    for (let i = 0; i < arg1.length; i++) {
        for (let j = 0; j < arg2.length; j++) {
            if (arg1[i] === arg2[j]) {
                return true;
            }
        }
    }
    return false;
}
////// Task#2
function summator(...arg) {
    let result;
    result = arg.reduce(function (sum, current) {
        return sum + current;
    });
    return result;
}
////// Task#3
function getUnique(...arr) {
    return new Set(arr);
}
////// Task#4
function toMatrix(data, rowSize) {
    const resultArray = data.map((_, i, arr) => arr.slice(i * rowSize, i * rowSize + rowSize)).filter((el) => el.length);
    return resultArray;
}
