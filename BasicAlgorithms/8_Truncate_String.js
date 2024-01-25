/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    return num>=str.length?str:str.substr(0,num)+"...";
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)) 
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) 
