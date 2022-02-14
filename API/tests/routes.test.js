const request = require("supertest");
const app = require("../app");

describe("/add route", () => {
  test("valid response code", () => {
    const validInput = { x: 1, y: 1 };
    return request(app)
      .post("/add/")
      .send(validInput)
      .then((resp) => {
        expect(resp.statusCode).toBe(200);
      });
  });

  test("valid input should return response body", () => {
    const validInput = { x: 1, y: 1 };
    return request(app)
      .post("/add/")
      .send(validInput)
      .then((resp) => {
        expect(resp.text).toBe(
          '{"input":{"x":1,"y":1},"operation":"addition","answer":2,"error":null}'
        );
      });
  });
});

describe("/subtract route", () => {
  test("valid response code", () => {
    const validInput = { x: 1, y: 1 };
    return request(app)
      .post("/subtract/")
      .send(validInput)
      .then((resp) => {
        expect(resp.statusCode).toBe(200);
      });
  });

  test("valid input should return response body", () => {
    const validInput = { x: 1, y: 1 };
    return request(app)
      .post("/subtract/")
      .send(validInput)
      .then((resp) => {
        expect(resp.text).toBe(
          '{"input":{"x":1,"y":1},"operation":"subtraction","answer":0,"error":null}'
        );
      });
  });
});

describe("/multiply route", () => {
  test("valid response code", () => {
    const validInput = { x: 1, y: 1 };
    return request(app)
      .post("/multiply/")
      .send(validInput)
      .then((resp) => {
        expect(resp.statusCode).toBe(200);
      });
  });

  test("valid input should return response body", () => {
    const validInput = { x: 2, y: 1 };
    return request(app)
      .post("/multiply/")
      .send(validInput)
      .then((resp) => {
        expect(resp.text).toBe(
          '{"input":{"x":2,"y":1},"operation":"multiplication","answer":2,"error":null}'
        );
      });
  });
});

describe("/divide route", () => {
  test("valid response code", () => {
    const validInput = { x: 4, y: 2 };
    return request(app)
      .post("/divide/")
      .send(validInput)
      .then((resp) => {
        expect(resp.statusCode).toBe(200);
      });
  });

  test("valid input should return response body", () => {
    const validInput = { x: 4, y: 2 };
    return request(app)
      .post("/divide/")
      .send(validInput)
      .then((resp) => {
        expect(resp.text).toBe(
          '{"input":{"x":4,"y":2},"operation":"division","answer":2,"error":null}'
        );
      });
  });
});
