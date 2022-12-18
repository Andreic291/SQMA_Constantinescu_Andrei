function multiply(a, b) {
  return a * b;
}

test("multiply 10 with 10", () => {
  expect(multiply(10, 10)).toBe(100);
});
