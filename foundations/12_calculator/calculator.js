const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  const total = array.reduce((total, num) => total + num, 0);
  return total;
};

const multiply = function(array) {
  const total = array.reduce((total, num) => total * num, 1)
  return total;
};

const power = function(x, y) {
	if (y === 0) {
    return 1;
  }
  else if (y === 1) {
    return x;
  }
  else {
    let total = 1;
    for (let i = 0; i < y; i++) {
      total = total * x;
    }
    return total;
  }
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  }

  let total = x;
  for (let i = x - 1; i > 0; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
