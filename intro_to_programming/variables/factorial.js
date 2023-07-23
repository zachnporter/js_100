function factorial(number) {
  // Looping Solution
  // let result = 1;
  // for (let n = number; n > 0; --n) {
  //   result *= n;
  // }

  // return result;

  // Recursive Solution
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320