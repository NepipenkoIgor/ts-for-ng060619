/* 1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.*/
function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var compArr = [].slice.call(arguments, 1);
    for (var i = 0; i < compArr.length; i++) {
        if (compArr.indexOf(arr[i]) === -1) {
            return false;
        }
    }
    return true;
}
var arr = ['Egor', 'Anton', 'Vasya'];
document.getElementById('task1true').innerHTML = isInArray(arr, 'Egor', 'Anton', 'Vasya').toString();
document.getElementById('task1false').innerHTML = isInArray(arr, 'Egor', 'Valya', 'Vasya').toString();
/* 2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

 */
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    [].forEach.call(arguments, function (item) {
        if (typeof item !== 'number') {
            sum += +item;
        }
        else {
            sum += item;
        }
    });
    return sum;
}
document.getElementById('task2sum1').innerHTML = summator(1, 2, 3, 4).toString();
document.getElementById('task2sum2').innerHTML = summator('1', 2, '3', 4).toString();
