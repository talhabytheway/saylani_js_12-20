// Celsius to Farenheit

var cel, far;

cel = parseFloat(prompt("Enter Temp in Celsius", 0));
far = ((9/5) * cel) + 32;

window.alert(`${far}° Farenheit`);