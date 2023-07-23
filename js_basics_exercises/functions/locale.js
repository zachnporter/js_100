/*
Write a function that extracts the language code from a locale.
A locale is a combination of a language code, a region,
and usually also a character set, e.g en_US.UTF-8.

Similar to the previous exercise, now write a function that extracts the region code from a locale
*/

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'