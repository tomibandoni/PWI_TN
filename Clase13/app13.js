// // Estructura repetitiva while


// while(condicion){
//     //Si es true ejecuta
// }
// // si es false sale de la estructura


// let x = 0

// while(x <= 10){
//     console.log(x)
//     x = x + 1
// } 


// // concepto del acumulador

// let x = 1
// let suma = 0
// while (x <= 5){
//     let valor = parseInt(prompt('Ingrese un valor'))
//     suma = suma + valor
//     console.log(valor)
//     x = x+1
// }
// console.log(`El valor de la suma es ${suma}`)


// // Ciclo repetitivo FOR 

// for (inicializacion; condicion; incremento/decremento){
//     //ejecuat el codigo
// }

// for (let i = 0; i <= 10; i=i+1){
//     console.log(i)
// }

// Hacer un programa q pida ingresar 10 numeros y muestre la suma de los ultimos 5

// let suma = 0

// for (let i = 0; i<= 9; i=i+1){
//     let valor = parseInt(prompt('Ingrese un valor'))
//     if (i>=5){
//         suma = suma + valor
//         console.log(suma)
//     }
// }
// console.log(`La suma de los ultimos 5 numeros es ${suma}`)

// Funciones 3 pasos

// funciones declaracion

// mostrarMensaje()

// // Funcion nombrada - Permite llamar a la funcion en cualquier parte del codigo aunque este definida mas abajo de lugar donde la llamo
// function mostrarMensaje(){
//     console.log('Hola Mundo')
// }

// Funcion que retorna un valor

function calcularTabla(){
    let resultado = 0
    let i = 1
    let palabra = ''
    let valor = parseInt(prompt('Ingrese valor'))
    for(i = 1; i<=10; i = i+1){
        resultado = i * valor
        palabra = palabra + `${valor} * ${i} = ${resultado}
        `
    }
    return palabra 
}

console.log(calcularTabla())