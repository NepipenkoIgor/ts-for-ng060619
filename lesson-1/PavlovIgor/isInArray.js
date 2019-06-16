var isInArray = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return !args.some(function (item) { return arr.indexOf(item) === -1 ? true : false; });
};
console.log(isInArray([1, 2, 3], 1, 2, 3)); //true
console.log(isInArray([1, 2, 3], 1, '2', 3)); //false
console.log(isInArray([1, 2, 3], 1, 4, 3)); //false
