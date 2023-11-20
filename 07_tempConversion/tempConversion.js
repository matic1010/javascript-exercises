const convertToCelsius = function(temp) {
  const tempInCelsius = (temp - 32) * 5 / 9
  return roundToOne(tempInCelsius)
};

const convertToFahrenheit = function(temp) {
  const tempInFahrenheit = temp * 9 / 5 + 32
  return roundToOne(tempInFahrenheit)
};

const roundToOne = function (number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
