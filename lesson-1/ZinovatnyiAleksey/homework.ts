////// Task#1
function isInArray(arg1: number[], ...arg2: number[]): boolean {
  for (let i: number = 0; i < arg1.length; i++) {
    for (let j: number = 0; j < arg2.length; j++) {
      if (arg1[i] === arg2[j]) {
        return true;
      }
    }
  }
  return false;
}

////// Task#2
function summator (...arg: number[]): number  {
  let result: number;
  result = arg.reduce(function(sum: number, current: number): number {
    return sum + current;
  });
  return result;
}

////// Task#3
function getUnique(...arr: (number|string)[]): Set<number|string> {
  return new Set(arr);
}

////// Task#4
function toMatrix(data: number[], rowSize: number): number[][] {
  const resultArray: number [][] = data.map((_: number, i: number, arr: number[]) =>
  arr.slice(i * rowSize, i * rowSize + rowSize)).filter((el: number[]) => el.length);
  return resultArray;
}

