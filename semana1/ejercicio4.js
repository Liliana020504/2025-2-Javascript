const { ask } = require('../herpers/input');

function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return "Numero 1 es mayor" + num1;
    } else {
        return "Numer 2 es mayor" + num2;
    }
}

async function main() {
    const num1 = Number(await ask("Introduce el primer numero"));
    const num2 = Number(await ask("Introduce el segundo numero"));
}

if(num1 === num2){
    console.log("Los dos numeros que ingresaste son iguales");
} else {
  const resultado = obtenerMayor(num1, num2);
  console.log("El numero mayor es: ", resultado);
}
main();