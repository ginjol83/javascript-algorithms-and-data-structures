/**
 * Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
 * 
 */

function findElement(arr, func) {
    let num = arr.find(func)
    console.log(num)
    return num;
  }

//findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) //debería regresar 8.
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) //debería regresar undefined.