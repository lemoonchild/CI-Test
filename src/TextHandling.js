function reverse(s) {
  if (typeof s !== "string") {
    throw new TypeError("s debe ser una cadena de texto");
  }
  return s.split("").reverse().join("");
}

module.exports = { reverse };