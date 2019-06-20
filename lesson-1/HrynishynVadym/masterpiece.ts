// Potentially nice feature!
// Tried to implement, but fails if arguments belong to more than one type.
type NotObject<T> = T extends object ? never : T;

//Here we go:
type Primitives = boolean | number | string | undefined | null;

/* 1)
   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
   Возвращает true, если все аргументы, кроме первого входят в первый.
   Первым всегда должен быть массив.
*/
function isInArray(arr: Primitives[], ...rest: Primitives[]): boolean {
    console.log(`Array: ${arr},\n Arguments: ${rest}`);
    
    return rest.every((item) => {
        return arr.includes(item);
    })
}

/* 2)
   Написать функцию summator(), которая суммирует переданые ей аргументы.
   Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
*/
function summator(...args: number[]): number;
function summator(...args: string[]): string;
// tried "...args: Primitives[]" below, but it causes errors in reduce methods
function summator(...args: any[]): Primitives {
    // it's not possible to check an Array for a type at runtime, so I check only first item 
    // (rest of them will have the same type as we've restricted their number by overloads)
    if (typeof args[0] === 'number') {
        return args.reduce((sum: number, currentVal: number) => {
            return sum + currentVal;
        });
    } else if (typeof args[0] === 'string') {
        return args.reduce((sum: string, currentVal: string) => {
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
function getUnique(...args: Primitives[]): Primitives[] {
    return Array.from(new Set(args));
}

/* 4)
   Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
   возвращает новый массив. Число показывает количество элементов в подмассивах,
   элементы подмассивов беруться из массива data.
   Оригинальный массив не должен быть изменен.
*/
interface toMatrixArgs {
    vector: Primitives[];
    rowSize: number;
};

function toMatrix({vector = [1], rowSize = 1}: toMatrixArgs = {vector: [1], rowSize: 1}): Primitives[][] {
    let counter: number = 0;

    return vector.reduce((matrix: Primitives[][], item, i, arr) => {
        matrix[counter] = matrix[counter] || [];

        if (matrix[counter].length < rowSize) {
            matrix[counter].push(item);
        } else {
            counter++;
            matrix[counter] = [item];
        }

        return matrix;
    }, []);
}