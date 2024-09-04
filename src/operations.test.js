const {sum, sub, div} = require('./operations')

test("add 1 + 2 to be equal 3", () => {
  expect(sum(1, 2)).toBe(3)
});

test('sub 2 - 1 to be equal 1', () => {
  expect(sub(2, 1)).toBe(1)
})

test('sub 2 / 1 to be equal 2', () => {
  expect(div(2, 1)).toBe(2)
})