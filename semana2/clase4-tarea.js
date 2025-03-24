//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja


let calificaciones = [60, 100, 50, 80, 90, 80, 70]
function analizarCalificaciones (numeros) {
    let aprobados = 0;
    let reprobados = 0;
    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 70) { aprobados ++ 
            
        
    } else if(numeros[i] < 70) { reprobados ++;

    }
}
console.log(`Personas aprobadas ${aprobados}`)
console.log(`Personas reprobadas ${reprobados}`)
const promedio = obtenerPromedio(numeros)
console.log(`Promedio general ${promedio}`)   
}
function main(){
    analizarCalificaciones(calificaciones)
    
}

main()

function obtenerPromedio(calificaciones) {
let total = 0;
for (let i = 0; i < calificaciones.length; i++) {
  total = total + calificaciones[i];
}
const promedio = total / calificaciones.length;

return promedio;

}

function obtenerMenorCalificacion(calificaciones) {
    let menor = calificaciones [0];
    for(let i = 0; i < calificaciones.length; i++) {
        if(calificaciones [i] < menor) {
            menor = calificaciones [i];
        }
    }
    return menor;
}
obtenerMenorCalificacion(calificaciones);
console.log(`La calificacion mas baja es: ${obtenerMenorCalificacion(calificaciones)}`);

function obtenerMayorcalificacion(calificaciones) {
    let mayor = calificaciones [0];
    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones [i] > mayor) {
            mayor = calificaciones [i];
        }
    }
    return mayor;
}
obtenerMayorcalificacion(calificaciones);
console.log(`La calificacion mas alta es: ${obtenerMayorcalificacion(calificaciones)}`)