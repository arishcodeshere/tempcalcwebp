function temperatureConverter() {
    var celsius = parseFloat(document.getElementById('inputCelsius').value);
    var fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    var kelvin;

    if (document.activeElement.id === 'inputCelsius') {
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        document.getElementById('inputFahrenheit').value = fahrenheit;
        document.getElementById('inputKelvin').value = kelvin;
    } else if (document.activeElement.id === 'inputFahrenheit') {
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
        document.getElementById('inputCelsius').value = celsius;
        document.getElementById('inputKelvin').value = kelvin;
    } else if (document.activeElement.id === 'inputKelvin') {
        celsius = kelvin - 273.15;
        fahrenheit = ((kelvin - 273.15) * 9/5) + 32;
        document.getElementById('inputCelsius').value = celsius;
        document.getElementById('inputFahrenheit').value = fahrenheit;
    }
}
