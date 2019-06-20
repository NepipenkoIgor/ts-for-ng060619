"use strict";
/* 1)
   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
   Возвращает true, если все аргументы, кроме первого входят в первый.
   Первым всегда должен быть массив.
*/
function isInArray(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log("Array: " + arr + ",\n Arguments: " + rest);
    return rest.every(function (item) {
        return arr.includes(item);
    });
}
// tried "...args: Primitives[]" below, but it causes errors in reduce methods
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // it's not possible to check an Array for a type at runtime, so I check only first item 
    // (rest of them will have the same type as we've restricted their number by overloads)
    if (typeof args[0] === 'number') {
        return args.reduce(function (sum, currentVal) {
            return sum + currentVal;
        });
    }
    else if (typeof args[0] === 'string') {
        return args.reduce(function (sum, currentVal) {
            return sum + currentVal;
        });
    }
}
/* 3)
   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
   Порядок элементов результирующего массива должен совпадать с порядком,
   в котором они встречаются в оригинальной структуре.
 */
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Array.from(new Set(args));
}
;
function toMatrix(_a) {
    var _b = _a === void 0 ? { vector: [1], rowSize: 1 } : _a, _c = _b.vector, vector = _c === void 0 ? [1] : _c, _d = _b.rowSize, rowSize = _d === void 0 ? 1 : _d;
    var counter = 0;
    return vector.reduce(function (matrix, item, i, arr) {
        matrix[counter] = matrix[counter] || [];
        if (matrix[counter].length < rowSize) {
            matrix[counter].push(item);
        }
        else {
            counter++;
            matrix[counter] = [item];
        }
        return matrix;
    }, []);
}
//# sourceMappingURL=masterpiece.js.map