function substract(a, b) {
  return a - b;
}

test("substract 2 from 10", () => {
  expect(substract(10, 2)).toBe(8);
});
