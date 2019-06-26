const summator = (...args: sn[]): number =>
    args
        .map((i: sn): number => +i)
        .reduce((acc: number, cur: number): number => cur + acc);

console.log(summator(1, 2, 3)); //6

console.log(summator(8, 9, 10, 11, 12)); //50

console.log(summator(5, '5', 5)); //15