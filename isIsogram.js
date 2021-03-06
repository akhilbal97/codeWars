// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  return isIsogramRecursion(str);
}

// recursive function to check if string is IsoGram
function isIsogramRecursion(str){
  //base case
  if(str.length === 0) {
    return true;
  }

  str = str.toLowerCase();
  var slicedChar = str.charAt(0);
  str = str.slice(1);
    
  return str.includes(slicedChar) ? false : isIsogramRecursion(str);
}



/**** one liner ***/
var isIsogram = str =>  !/(\w).*\1/i.test(str);
