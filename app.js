const prompt = require("prompt-sync")();

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("=== Conversor de Temperatura ===");

let c = parseFloat(prompt("Digite a temperatura em Celsius: "));
let f = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

console.log("\nResultados:");
console.log(`${c}°C = ${celsiusParaFahrenheit(c).toFixed(2)}°F`);
console.log(`${f}°F = ${fahrenheitParaCelsius(f).toFixed(2)}°C`);
