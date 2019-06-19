// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

type stringOrNumber = string | number;

const isInArray: Function = (arr: stringOrNumber[], ...arg: stringOrNumber[]): boolean => {
  return arg.reduce((acc: boolean, item: stringOrNumber) => acc && arr.includes(item), true);
};

console.log(isInArray([1, 2], 1, 2));
console.log(isInArray([1, 2], 3, 2));

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

const summator: Function = (...arg: stringOrNumber[]): number => {
  return arg.reduce((acc: number, item: stringOrNumber) => acc + Number(item), 0);
};

console.log(summator(1, 2, 3));


// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

const getUnique: Function = (...arg: stringOrNumber[]): stringOrNumber[] => {
  return arg.reduce((acc: stringOrNumber[], item: stringOrNumber) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);
};

console.log(getUnique('str', 1, 1, 2, 2, 3, 3, 'str'));

// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.

const toMatrix: Function = (data: number[], rowSize: number): number[] => {
  const iter: Function = (acc: number[], lastElement: number[], elementsInRowLeft: number, index: number) => {
    if (index === data.length - 1) {
      return [...acc, [...lastElement, data[index]]];
    }
    if (elementsInRowLeft > 0) {
      return iter(acc, [...lastElement, data[index]], elementsInRowLeft - 1, index + 1);
    } else if (elementsInRowLeft === 0) {
      return iter([...acc, lastElement], [], rowSize, index);
    }
  };

  return iter([], [], rowSize, 0);
};

console.log(toMatrix([1, 2, 3, 4], 2));
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));