/*
Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all 
elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments 
by adding a rest parameter to the function definition or using the arguments object.


Buscar y destruir
Se le proporcionará una matriz inicial como primer argumento de la función destructora, seguida de uno o más argumentos. Eliminar todo
elementos de la matriz inicial que tienen el mismo valor que estos argumentos.

La función debe aceptar un número indeterminado de argumentos, también conocida como función variada. Puedes acceder a los argumentos adicionales.
agregando un parámetro de descanso a la definición de la función o usando el objeto de argumentos.
*/

function destroyer(arr) {
    const args = Array.from(arguments).slice(1)    
    return arr.map(x=> args.includes(x)?' ':x).filter(x=>x!=' ');
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))