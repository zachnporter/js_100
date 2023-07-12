/*
Write a program named age.js that includes someone's age and then 
calculates and reports the future age in 10, 20, 30 and 40 years. 
Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
*/

let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));
console.log(`You are ${age} years old`);

for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}