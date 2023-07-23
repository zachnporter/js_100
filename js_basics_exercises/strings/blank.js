// Write a function that checks whether a string is empty or not.

/*
function isBlank(str) {
  return !str;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
*/

/*
Change your isBlank function from the previous exercise to 
return true if the string is empty or only contains whitespace.
*/

function isBlank(str) {
  return !str.trim();
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true