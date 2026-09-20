const convertToCelsius = function(fahrenheit) {
  let convertedCelsius = (fahrenheit - 32) * 5 / 9;
  return (Math.round(convertedCelsius * 10)) / 10;
};

const convertToFahrenheit = function(Celsius) {
  let convertedFahrenheit = Celsius * 9 / 5 + 32;
  return (Math.round(convertedFahrenheit * 10)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
