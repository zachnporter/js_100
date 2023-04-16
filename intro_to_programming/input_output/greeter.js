function getName(text) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(text);
  return name;
}

let firstName = getName("What is your first name? ");
let lastName = getName("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}`);