/*
The destinations array contains a list of travel destinations.

Write a function that checks whether or not a particular destination is included 
within destinations, without using the built-in method Array.prototype.includes().
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// Solution 1
// function contains(location, destinations) {
//   for (let i = 0; i < destinations.length; i += 1) {
//     if (destinations[i] === location) {
//       return true;
//     }
//   }

//   return false;
// }

// Solution 2
function contains(location, destinations) {
  return destinations.filter(destination => destination === location).length > 0;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false