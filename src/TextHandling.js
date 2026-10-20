function reverse(s) {
  validateString(s, "s");
  return s.split("").reverse().join("");
}

function countVowels(s) {
  validateString(s, "s");
  const vowels = s.match(/[aeiouáéíóúü]/gi);
  return vowels ? vowels.length : 0;
}

function isPalindrome(s) {
  validateString(s, "s");
  return s === reverse(s);
}

function toUpper(s) {
  validateString(s, "s");
  return s.toUpperCase();
}

function concat(a, b) {
  validateString(a, "a");
  validateString(b, "b");
  return a + b;
}

function validateString(value, parameterName) {
  if (typeof value !== "string") {
    throw new TypeError(`${parameterName} debe ser una cadena de texto`);
  }
}

module.exports = { reverse, countVowels, isPalindrome, toUpper, concat };
