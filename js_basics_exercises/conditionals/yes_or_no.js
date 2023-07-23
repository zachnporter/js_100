/*
The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.
*/

let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!')
} else {
  console.log('No.')
}

console.log(randomNumber ? 'Yes!' : 'No.')