
const isInArray = (arr: sn[], ...args: sn[]): boolean => !args.some((item: sn): boolean => arr.indexOf(item) === -1 ? true : false);

console.log(isInArray([1, 2, 3], 1, 2, 3)); //true

console.log(isInArray([1, 2, 3], 1, '2', 3)); //false

console.log(isInArray([1, 2, 3], 1, 4, 3)); //false