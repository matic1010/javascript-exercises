const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum + current, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((product, current) => product * current, 1)
};

const power = function(base, exp) {
	return Math.pow(base, exp)
};

const factorial = function(n) {
	if(n === 0) return 1;
  let product = 1;
  for(let i = 1; i<=n; i++) {
    product *= i;
  }
  return product;
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
