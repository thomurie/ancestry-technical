const express = require("express");
const router = express.Router();
const Calculator = require("../helpers/calculator");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/add", function (req, res, next) {
  const calc = new Calculator();
  const { x, y } = req.body;
  const answer = calc.add(x, y);
  res.json(answer);
});

router.post("/subtract", function (req, res, next) {
  const calc = new Calculator();
  const { x, y } = req.body;
  const answer = calc.subtract(x, y);
  res.json(answer);
});

router.post("/multiply", function (req, res, next) {
  const calc = new Calculator();
  const { x, y } = req.body;
  const answer = calc.multiply(x, y);
  res.json(answer);
});

router.post("/divide", function (req, res, next) {
  const calc = new Calculator();
  const { x, y } = req.body;
  const answer = calc.divide(x, y);
  res.json(answer);
});

module.exports = router;
