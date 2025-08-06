let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelciusToFahrenheitUsingRegularFunction = function (temperature) {
    const result = (9/5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelciusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// Deklarasi Function dengan Arrow Function
const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9/5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelciusToFahrenheitUsingArrowFunction(80);
console.log("Hasil konversi:", temperatureInFahrenheit);

//  ===============================================================

// Arrow function
const convertCelciusToFahrenheit = (temperature) => {
    const result = (9/5) * temperature + 32;
    return result;
}

temperatureInFahrenheit = convertCelciusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// Arrow function ringkas
const convertCelciusToFahrenheitInChonciseSyntax = (temperature) => (9/5) * temperature + 32;

temperatureInFahrenheit = convertCelciusToFahrenheitInChonciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);