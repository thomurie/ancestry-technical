const schema = require("./response.json");
const validateInput = require("./validateInput");

const Calculator = class {
  constructor() {
    this.responseSchema = schema;
  }

  validate(a, b) {
    const { x, y, error } = validateInput(a, b);
    this.responseSchema = Object.assign({}, schema);
    this.responseSchema.input = { x: x, y: y };
    this.responseSchema.error = error;
  }

  add(a, b) {
    this.validate(a, b);
    this.responseSchema.operation = "addition";
    const { x, y } = this.responseSchema.input;
    this.responseSchema.answer = this.responseSchema.error ? null : x + y;
    return this.responseSchema;
  }

  subtract(a, b) {
    this.validate(a, b);
    this.responseSchema.operation = "subtraction";
    const { x, y } = this.responseSchema.input;
    this.responseSchema.answer = this.responseSchema.error ? null : x - y;
    return this.responseSchema;
  }

  multiply(a, b) {
    this.validate(a, b);
    this.responseSchema.operation = "multiplication";
    const { x, y } = this.responseSchema.input;
    this.responseSchema.answer = this.responseSchema.error ? null : x * y;
    return this.responseSchema;
  }

  divide(a, b) {
    this.validate(a, b);
    this.responseSchema.operation = "division";
    const { x, y } = this.responseSchema.input;
    if (y === 0) this.responseSchema.error = "Cannot divide by 0.";
    this.responseSchema.answer = this.responseSchema.error ? null : x / y;
    return this.responseSchema;
  }
};

module.exports = Calculator;
