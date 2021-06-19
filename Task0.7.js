function convertCelsiusToFahrenheit(celsiusNumber) {
    var fahreinheit = (celsiusNumber * 9/5) + 32;
    return fahreinheit;
}
function convertFahrenheitToCelsius(fahreinheit) {
    var celsiusNumber = (fahreinheit - 32) * 5/9;
    return celsiusNumber; 
}

convertCelsiusToFahrenheit(0);
convertFahrenheitToCelsius(77);