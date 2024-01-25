/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/


const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);   

function sumAll(arr) {
    return range(
      arr[0]>arr[1]?arr[1]:arr[0],
      arr[1]>arr[0]?arr[1]:arr[0],
      1)
        .reduce((x,y)=>x+y)
  }
  
console.log(sumAll([1, 4]));

/*
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
from:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/