/*

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  
    const lowers = str.split('').map(x => x===x.toUpperCase()?x.toLowerCase():x).join('');
    console.log(lowers)

    return lowers
  }
  
 console.log(spinalCase('This Is Spinal Tap'))

/*
Espera :spinalCase("This Is Spinal Tap")debería devolver la cadena this-is-spinal-tap.
Espera :spinalCase("thisIsSpinalTap")debería devolver la cadena this-is-spinal-tap.
Espera :spinalCase("The_Andy_Griffith_Show")debería devolver la cadena the-andy-griffith-show.
Espera :spinalCase("Teletubbies say Eh-oh")debería devolver la cadena teletubbies-say-eh-oh.
Espera :spinalCase("AllThe-small Things")debería devolver la cadena all-the-small-things.
*/