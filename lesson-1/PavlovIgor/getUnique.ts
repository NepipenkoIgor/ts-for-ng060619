const getUnique = (...arr: sn[]): sn[] => {
    const acc: sn[] = [];
    
    arr.forEach((item: sn) => acc.indexOf(item) === -1 && acc.push(item));
    
    return acc;
}

const getUniqueByHash = (...arr: sn[]): sn[] => {
    const hash: {[key: string]: sn} = {};
    const acc: sn[] = [];
    arr.forEach((item: sn) => {
        if (item in hash) return;
        hash[item] = 0;
        acc.push(item);
    });
    return acc;
}

console.log(getUnique(9, 1, 0, 8, 3, 4, 2, 5, 7, 2, 4, 6, '0', 9, '0'));
// const start2 = Date.now();
// for (let i = 0; i < 10000000; i++) {
//     getUnique(9, 1, 0, 8, 3, 4, 2, 5, 7, 2, 4, 6, 0, 9, 0)
// }
// const finish2 = Date.now();
// console.log('no hash option', finish2 - start2);

// Much faster, but converts numbers to strings under the hood.
console.log(getUniqueByHash(9, 1, 0, 8, 3, 4, 2, 5, 7, 2, 4, 6, '0', 9, '0'));

// const start = Date.now();
// for (let i = 0; i < 10000000; i++) {
//     getUniqueByHash(9, 1, 0, 8, 3, 4, 2, 5, 7, 2, 4, 6, 0, 9, 0)
// }
// const finish = Date.now();
// console.log('hash option', finish - start);
