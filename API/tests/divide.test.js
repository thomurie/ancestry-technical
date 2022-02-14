const { TestWatcher } = require("jest");
const Calculator = require("../helpers/calculator");

test("two integers are divided", () => {
  const calc = new Calculator();
  const result = calc.divide(4, 2);
  expect(result.answer).toBe(2);
});

test("two floats are divided", () => {
  const calc = new Calculator();
  const result = calc.divide(4.0, 2.0);
  expect(result.answer).toBe(2.0);
});

test("two strings are corrected to floats and are then divided", () => {
  const calc = new Calculator();
  const result = calc.divide("4", "2");
  expect(result.answer).toBe(2.0);
});

test("two strings are not divided", () => {
  const calc = new Calculator();
  const result = calc.divide("not", "numbers");
  expect(result.error).toBe("Invalid Input. Please verify and try again.");
});

test("cannot divide by 0", () => {
  const calc = new Calculator();
  const result = calc.divide(4, 0);
  expect(result.error).toBe("Cannot divide by 0.");
});
