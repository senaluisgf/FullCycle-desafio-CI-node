const sum = function (a, b) {
  return a + b
}

const sub = function (a, b) {
  return a - b
}

const div = function (a, b) {
  return a/b
}

const times = function (a, b) {
  return a * b
}

const pow = function (a, b) {
  result = 1

  for (i = 0; i < b; i++) {
    result *= a
  }
}

module.exports = {
  sum,
  sub
}