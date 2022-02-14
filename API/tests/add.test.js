const { TestWatcher } = require("jest");
const Calculator = require("../helpers/calculator");

test("two integers are added together", () => {
  const calc = new Calculator();
  const result = calc.add(1, 1);
  expect(result.answer).toBe(2);
});

test("two floats are added together", () => {
  const calc = new Calculator();
  const result = calc.add(1.0, 1.0);
  expect(result.answer).toBe(2.0);
});

test("two strings are corrected to floats and are then added together", () => {
  const calc = new Calculator();
  const result = calc.add("1", "1");
  expect(result.answer).toBe(2.0);
});

test("two strings are not added together", () => {
  const calc = new Calculator();
  const result = calc.add("not", "numbers");
  expect(result.error).toBe("Invalid Input. Please verify and try again.");
});
