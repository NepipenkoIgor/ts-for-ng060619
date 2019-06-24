/* 1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.*/

function isInArray(arr: [string, string, string], ...args: any): boolean {
    const compArr: any = [].slice.call(arguments, 1);

    for (let i: number = 0; i < compArr.length; i++) {
        if (compArr.indexOf(arr[i]) === -1) {
            return false;
        }
    }
    return true;
}

const arr: [string, string, string] = ['Egor', 'Anton', 'Vasya'];

document.getElementById('task1true').innerHTML = isInArray(arr, 'Egor', 'Anton', 'Vasya').toString();
document.getElementById('task1false').innerHTML = isInArray(arr, 'Egor', 'Valya', 'Vasya').toString();
//Не могу понять почему скрипт не видит элемент и в консоли выдает Uncaught SyntaxError: Unexpected token :

/* 2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

function summator(...args: any): number {
    let sum: number = 0;
    [].forEach.call(arguments, function(item: any): void {
        if (typeof item !== 'number') {
            sum += +item;
        } else {
            sum += item;
        }
    });
    return sum;
}

document.getElementById('task2sum1').innerHTML = summator(1, 2, 3, 4).toString();
document.getElementById('task2sum2').innerHTML = summator('1', 2, '3', 4).toString();

/*3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
 */

function getUnique(...args: any): [] {
    const result: any = [].slice.call(arguments, 1);
    return result;
}
//Правильно ли понял задачу?
getUnique(1, 2, 'Egor', true, null);

/* 4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
 */

function toMatrix(data: [], rowSize: number): [] {
    let superArr: [] = [];
    //Не понимаю почему он ругается на let, ведь я меняю эту переменную впоследствии
    for (let i = 0; i < data.length;) {
        let newArr: [] = [];
        for (let x = 0; x < rowSize; x++) {
            if (typeof data[i] === 'undefined') {
                break;
            } else {
                newArr.push(data[i]);
                i++;
            }
        }
        superArr.push(newArr);
    }
    return superArr;
}

const data: any = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 0];
//Не очень понимаю как тут сделать, если не добавлять any, делать [number, number, number...] не очень удобно.
toMatrix(data, 2);
toMatrix(data, 3);
toMatrix(data, 4);