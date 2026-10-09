const test = require("node:test");
const assert = require("node:assert");
const { reverse } = require("../src/TextHandling");

test("reverse invierte una palabra", () => {
  assert.strictEqual(reverse("hola"), "aloh");
});

test("reverse lanza error si no es string", () => {
  assert.throws(() => reverse(123), TypeError);
});