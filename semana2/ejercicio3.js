async function main() {
    const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol",];
}

for (let index = 0; index < nombres.length; index++) {
    if (nombres[index].lenght >= 5) {
        console.log('${nombres[index]} tiene mas de 5 caracteres');
    } else {
        console.log('${nombres[index]} tiene solo ${nombres[index].length} caracteres ');
    }
}

const nombres2 = ["Oscar", "Ana", "Luis", "Eduardo", "Isabel", "Maria", "Ursula", "Pedro"]
const vocales = ["a", "e", "i", "o", "u"]
for (let index1 = 0; index1 < nombres2.length; index1++) {
    const primerLetra = nombres2[index][0].toLowerCase();
    for (let index2 = 0; index2 < vocales.length; index2++) {
        if (primerLetra === vocales[index2]) {
            console.log('&{nombres2[index1]} empieza con ${vocales[index2].toUpperCase()}');
        
        }
    }
}

const palabraAlReves = await ask("Escribe una palabra\n");
let resultado = "";
for(let i=palabraAlReves.lenght-1; i >= 0; 1--) {
    resultado = resultado + palabraAlReves[i];
}
console.log("Al reves", resultado);

main();