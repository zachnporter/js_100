// 1.Concatenate two or more strings, one with your first name and one with your last
'Zach ' + 'Porter';

// 2.Using arithmetic operators, get the individual digits of a 4-digit number like 4936
let number = 4936;
let ones = number % 10;

number = (number - ones) / 10;
let tens = number % 10;

number = (number - tens) / 10;
let hundreds =  number % 10;

let thousands = (number - hundreds) / 10;

// 3.Identify the data type for each of the following values:
'true'; // string
false; // boolean
1.5; // number
2; // number
undefined; // undefined
{ foo: 'bar' }; // object

// 4.Explain why this code logs '510' instead of 15.
console.log('5' + 10); // implicit type coercion

// 5.Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
console.log(Number('5') + 10);

// 6.Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
// The value of 5 + 10 is 15.
console.log(`The value of 5 + 10 is ${Number('5') + 10}`);

// 7.Will an error occur if you try to access an array element with an index that is greater than or equal to the 
//   length of the array? For example:
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
// No. It will return undefined

// 8.Create an array named names that contains a list of pet names.
let petNames = ['Rosey', 'Daisy', 'Mochi', 'Luna', 'Boots'];

// 9.Create an object named pets that contains a list of pet names and the type of animal. For instance:
let pets = {
  Rosey: 'dog',
  Daisy: 'dog',
  Mochi: 'cat',
  Luna:  'cat',
  Boots: 'cat',
}

// 10.What value does the following expression evaluate to?
'foo' === 'Foo' // false

// 11.What value does the following expression evaluate to?
parseInt('3.1415') // 3

// 12.What value does the following expression evaluate to?
'12' < '9' // true
