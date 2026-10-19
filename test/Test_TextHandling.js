const test = require("node:test");
const assert = require("node:assert");
const {
  reverse,
  countVowels,
  isPalindrome,
  toUpper,
  concat,
} = require("../src/TextHandling");

test("reverse invierte una palabra", () => {
  assert.strictEqual(reverse("hola"), "aloh");
});

test("reverse invierte una cadena con espacios", () => {
  assert.strictEqual(reverse("hola mundo"), "odnum aloh");
});

test("reverse lanza error si no es string", () => {
  assert.throws(() => reverse(123), TypeError);
});

test("countVowels cuenta las vocales de una palabra", () => {
  assert.strictEqual(countVowels("murcielago"), 5);
});

test("countVowels reconoce mayúsculas y vocales acentuadas", () => {
  assert.strictEqual(countVowels("ÁRBOL y pingüino"), 6);
});

test("countVowels lanza error si no es string", () => {
  assert.throws(() => countVowels(null), TypeError);
});

test("isPalindrome reconoce un palíndromo", () => {
  assert.strictEqual(isPalindrome("reconocer"), true);
});

test("isPalindrome rechaza una cadena que no es palíndromo", () => {
  assert.strictEqual(isPalindrome("sistemas"), false);
});

test("isPalindrome lanza error si no es string", () => {
  assert.throws(() => isPalindrome(["a", "b", "a"]), TypeError);
});

test("toUpper convierte una palabra a mayúsculas", () => {
  assert.strictEqual(toUpper("hola"), "HOLA");
});

test("toUpper convierte texto con espacios y acentos", () => {
  assert.strictEqual(toUpper("integración continua"), "INTEGRACIÓN CONTINUA");
});

test("toUpper lanza error si no es string", () => {
  assert.throws(() => toUpper(undefined), TypeError);
});

test("concat une dos palabras", () => {
  assert.strictEqual(concat("hola", "mundo"), "holamundo");
});

test("concat conserva los espacios recibidos", () => {
  assert.strictEqual(concat("hola ", "mundo"), "hola mundo");
});

test("concat lanza error si alguno de los valores no es string", () => {
  assert.throws(() => concat("resultado: ", 42), TypeError);
});
