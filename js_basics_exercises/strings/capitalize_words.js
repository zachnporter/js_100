/*
Write code that capitalizes the words in the string 'launch school tech & talk',
so that you get the string 'Launch School Tech & Talk'.
*/

let str = 'launch school tech & talk';
let words = str.split(' ')

let capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));

console.log(capitalizedWords.join(' '));