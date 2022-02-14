const { TestWatcher } = require("jest");
const Calculator = require("../helpers/calculator");

test("two integers are multiplied together", () => {
  const calc = new Calculator();
  const result = calc.multiply(2, 1);
  expect(result.answer).toBe(2);
});

test("two floats are multiplyed together", () => {
  const calc = new Calculator();
  const result = calc.multiply(2.0, 1.0);
  expect(result.answer).toBe(2.0);
});

test("two strings are corrected to floats and are then multiplied together", () => {
  const calc = new Calculator();
  const result = calc.multiply("2", "1");
  expect(result.answer).toBe(2.0);
});

test("two strings are not multiplied together", () => {
  const calc = new Calculator();
  const result = calc.multiply("not", "numbers");
  expect(result.error).toBe("Invalid Input. Please verify and try again.");
});
