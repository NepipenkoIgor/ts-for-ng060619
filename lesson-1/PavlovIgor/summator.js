var summator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args
        .map(function (i) { return +i; })
        .reduce(function (acc, cur) { return cur + acc; });
};
console.log(summator(1, 2, 3)); //6
console.log(summator(8, 9, 10, 11, 12)); //50
console.log(summator(5, '5', 5)); //15
