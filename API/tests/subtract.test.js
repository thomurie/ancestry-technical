const { TestWatcher } = require("jest");
const Calculator = require("../helpers/calculator");

test("two integers are subtracted together", () => {
  const calc = new Calculator();
  const result = calc.subtract(1, 1);
  expect(result.answer).toBe(0);
});

test("two floats are subtracted together", () => {
  const calc = new Calculator();
  const result = calc.subtract(1.0, 1.0);
  expect(result.answer).toBe(0);
});

test("two strings are corrected to floats and are then subtracted together", () => {
  const calc = new Calculator();
  const result = calc.subtract("1", "1");
  expect(result.answer).toBe(0);
});

test("two strings are not subtracted together", () => {
  const calc = new Calculator();
  const result = calc.subtract("not", "numbers");
  expect(result.error).toBe("Invalid Input. Please verify and try again.");
});
