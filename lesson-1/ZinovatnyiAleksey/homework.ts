// Task#1
function isInArray(arg1:any[], ...arg2:any[]): boolean {

  for (var i=0; i<arg1.length; i++) {
    for (var j=0; j<arg2.length; j++) {
      if (arg1[i] === arg2[j]) return true;
    } 
    return false;
  }
  return true;
}

console.log(isInArray([1, 4, 6], 2, 3, 1, 5, 8, 3)); 
console.log(isInArray([1, 4, 6], 2, 3, 5, 10, 8, 6));

// Task#2
function summator(...arg: (number)[])  {
  var result: any;
  var sum, current: string, number;
  result = arg.reduce(function(sum, current){
    return sum + current;
  })
  return result;
}
console.log(summator(1, 2, 3, 4));