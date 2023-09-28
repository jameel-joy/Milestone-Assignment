// 11. Unit converter
// A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying
// it on its website. They want a function that can convert Celsius to Fahreneit accurately and efficiently. The
// function should take input in Celsius and return output in Fahrenheit. This function will help the weather station
// to provide temperature readings that are dasily understandable to a wider audience.

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const celsiusTemperature = 25;
  
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}`);
  