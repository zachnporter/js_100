/*
Implement a function repeat that repeats an input string a given number of times,
as shown in the example below; without using the pre-defined string method String.prototype.repeat().
*/

function repeat(num, str) {
  repeatedString = '';

  while (num > 0) {
    repeatedString += str;
    num -= 1;
  }

  return repeatedString;
}

console.log(repeat(3, 'ha')); // 'hahaha'