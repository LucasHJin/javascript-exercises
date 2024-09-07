const convertToCelsius = function(F) {
  let cel = Math.round(((F-32)*5/9)*10)/10;
  return cel;
};

const convertToFahrenheit = function(C) {
  let far = Math.round((C*9/5+32)*10)/10;
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
