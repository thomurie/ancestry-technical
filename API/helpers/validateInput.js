function validateInput(x, y) {
  const xFloat = parseFloat(x);
  const yFloat = parseFloat(y);

  if (Boolean(xFloat) && Boolean(yFloat))
    return { x: xFloat, y: yFloat, error: null };

  return { x: x, y: y, error: "Invalid Input. Please verify and try again." };
}

module.exports = validateInput;
