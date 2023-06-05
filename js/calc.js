// Función para el cálculo del IMC
function calcularIMC(peso, altura) {
   let altM = altura / 100;
   let imc = peso / (altM * altM);
   return imc.toFixed(2); 
}
 // Solicitud de ingreso de datos
let peso = parseFloat(prompt('Ingrese su peso en kg:'));
let altura = parseFloat(prompt('Ingresa su altura en cm:'));

let imc = calcularIMC(peso, altura);

console.log('Tu IMC es: ' + imc);

let rango;
if (imc < 18.5) {
   rango = 'Bajo peso';
} else if (imc >= 18.5 && imc < 25) {
   rango = 'Peso normal';
} else if (imc >= 25 && imc < 30) {
   rango = 'Sobrepeso';
} else {
   rango = 'Obesidad';
}
console.log('Tu IMC indica que tienes: ' + rango);
