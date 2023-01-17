// Funciones

// 3 partes  1 parte. Declaracion y llamada - 2 Declaracion de parametros - // 3 retorno de un valor

// 2 Declaracion de parametros

// function mostrarNombre(a){
//     console.log('esto es el consolelog de la funcion', a)
//     return a
// }

// let nombre = prompt('Ingrese su nombre')

// console.log(mostrarNombre(nombre))

// function multiplique(a,b){
//     let resultado = a * b
//     return resultado
// }

// let num1 = prompt('ingrese el primer valor')
// let num2 = prompt('ingrese el segundo valor')

// console.log(multiplique(num1,num2))

// Ejercicios

// Punto 1

// for (i = 1; i <= 10; i=i+1){
//     console.log(i)
// }

// Punto 2

// for (i = 2; i <=20; i=i+2){
//     console.log(i)
// }

// Punto 3

// for (i = 1; i <=19; i=i+2){
//     console.log(i)
// }

// Punto 4

// for (i = 10; i >=1; i=i-1){
//     console.log(i)
// }
    
// Punto 5

// for (i = 1; i <=10; i=i+1){
//     if (i <= 5){
//         console.log(i)
//     } 
// }
    
// Punto 6

// for (i = 1; i <=10; i=i+1){
//     if (i != 5){
//         console.log(i)
//     }
// }

// Punto 7

// function decirNombre(){
//     let nombre = prompt('Ingrese nombre')
//     return nombre
// }

// alert ('hola ' + decirNombre())

// Punto 8

// function saludar(){
//     let nombre = prompt('Ingrese nombre')
//     return 'Hola ' + nombre
// }

// alert (saludar())

// Punto 9

// function sumar(a,b){
//     let resultado = a + b
//     return resultado
// }

// let num1 = parseInt(prompt('Ingrese un valor'))
// let num2 = parseInt(prompt('Ingrese otro valor'))

// console.log(sumar(num1,num2))

// Punto 10

// function sumar(a,b){
//     let resultado = a - b
//     return resultado
// }

// let num1 = parseInt(prompt('Ingrese un valor'))
// let num2 = parseInt(prompt('Ingrese otro valor'))

// console.log(sumar(num1,num2))

// Punto 11

// function calcular(signo,a,b){

//     if (signo == '+') {
//         resultado = a + b
//     } else {
//         if (signo == '-') {
//             resultado = a - b
//         } else {
//             resultado = 'null'
//         }
//     }
//     return resultado
// }

// let num1 = parseInt(prompt('Ingrese un valor'))
// let num2 = parseInt(prompt('Ingrese otro valor'))
// let operador = prompt('Ingrese un operador +/-')

// console.log(calcular(operador,num1,num2))

// Punto 13

// function calcular(a,b,signo){

//     if (signo == '+'){
//         resultado = a + b
//     } else {
//         if (signo == '-'){
//          resultado = a - b
//         } else {
//             if (signo == '*'){
//              resultado = a * b
//             } else {
//                 if (signo == '/'){
//                   resultado = a / b
//                 } else {
//                  resultado = 'Ingrese un operador valido'
//                 }
//             }
//         }
//     } 
//     return resultado
// }

// let usar = prompt('Quiere usar la calculadora? s/n')

// while(usar == 's'){

//     let num1 = parseInt(prompt('Ingrese un numero'))
//     let num2 = parseInt(prompt('Ingrese otro numero'))
//     let operador = prompt('Ingrese un operador +,-,*,/')

//     calcular(num1,num2,operador)
//     alert (resultado)
//     usar = prompt('Quiere usar la calculadora? s/n')
// }

// alert ('El programa ha finalizado')

// Punto 14

// for (i = 11; i <=275; i=i+11){
//     console.log(i)
// }

// Punto 15

// function esPar(a){
//     res = a % 2
//     return res
// }

// let par = 0
// let impar = 0

// for (i = 1; i <= 5; i = i + 1){

//     let num = parseInt(prompt(`Ingrese el numero ${i}`))
    
//     esPar(num)

//     if (res == 0){
//         par = par + 1
//     } else {
//         impar = impar + 1
//     }
// }

// console.log(`La numeros pares son ${par} y los numeros impares son ${impar}`)

// Punto 16

// let alt1 = parseInt(prompt('Ingrese altura 1'))
// let alt2 = parseInt(prompt('Ingrese altura 2'))
// let alt3 = parseInt(prompt('Ingrese altura 3'))
// let alt4 = parseInt(prompt('Ingrese altura 4'))
// let alt5 = parseInt(prompt('Ingrese altura 5'))

// let altProm = (alt1 + alt2 + alt3 + alt4 + alt5)/5

// console.log(`La altura promedio es ${altProm}`)
// ------------------------------------------------------------------------------
// function final(a){
//     let altPro = a/5
//     return altPro
// }

// let guardo = 0

// for (let i=1; i<=5; i=i+1){

//     let alt = parseInt(prompt(`Ingrese la altura numero ${i}`))
//     guardo = guardo + alt
// }

// console.log(final(guardo))

// Punto 17
/*
let sumaEdadTM = 0
let sumaEdadTT = 0
let sumaEdadTN = 0

for (let i = 1; i<= 5; i=i+1){

    let edadTM = parseInt(prompt(`Ingrese la edad ${i} del turno mañana`))
    sumaEdadTM = sumaEdadTM + edadTM
}

for (let i = 1; i<= 6; i=i+1){

    let edadTT = parseInt(prompt(`Ingrese la edad ${i} del turno tarde`))
    sumaEdadTT = sumaEdadTT + edadTT
}

for (let i = 1; i<= 11; i=i+1){

    let edadTN = parseInt(prompt(`Ingrese la edad ${i} del turno noche`))
    sumaEdadTN = sumaEdadTN + edadTN
}
*/
// Solucion sin Funciones
/*
console.log('Punto A y B')

let promedioEdadTM = sumaEdadTM/5
console.log(promedioEdadTM)

let promedioEdadTT = sumaEdadTT/6
console.log(promedioEdadTT)

let promedioEdadTN = sumaEdadTN/11
console.log(promedioEdadTN)

console.log('Punto C')

if (promedioEdadTM > promedioEdadTT && promedioEdadTM > promedioEdadTN){
    console.log('mayor promedio Turno Mañana')
} else {
    if (promedioEdadTT > promedioEdadTN){
        console.log('mayor promedio Turno Tarde')
    } else {
        console.log('mayor promedio Turno Noche')
    }
}
*/
// Solucion con Funciones

/*
console.log('Punto A y B')

function promedio_TM(a){
    let promedioTM = sumaEdadTM/5
    return promedioTM
}

console.log(`La edad promedio del turno mañana es ${promedio_TM(sumaEdadTM)}`)

function promedio_TT(b){
    let promedioTT = sumaEdadTT/6
    return promedioTT
}

console.log(`La edad promedio del turno tarde es ${promedio_TT(sumaEdadTT)}`)

function promedio_TN(c){
    let promedioTN = sumaEdadTN/11
    return promedioTN
}

console.log(`La edad promedio del turno noche es ${promedio_TN(sumaEdadTN)}`)

console.log('Punto C')

if (promedio_TM(sumaEdadTM) > promedio_TT(sumaEdadTT) && promedio_TM(sumaEdadTM) > promedio_TN(sumaEdadTN)){
    console.log('El promedio de edades mayor es del turno mañana')
} else {
    if (promedio_TT(sumaEdadTT) > promedio_TN(sumaEdadTN)){
        console.log('El promedio de edades mayor es del turno tarde')
    } else {
        console.log('El promedio de edades mayor es del turno noche')
    }
}*/

// Punto 18
/*
let positivos = 0
let negativos = 0
let multi15 = 0
let pares = 0

for (i=1; i<=10; i=i+1){

    let valor = parseInt(prompt(`Ingrese el valor numero ${i}`))

    if (valor > 0){
        positivos = positivos + 1
    } 
    if (valor < 0){
        negativos = negativos + 1
    }
    if (valor > 0 && valor%15 == 0){
        multi15 = multi15 + 1
    }  
    if (valor%2 == 0){
        pares = pares + i
    }

}

console.log(`Los valores positivos son ${positivos}`)
console.log(`Los valores negativos son ${negativos}`)
console.log(`Los valores multi de 15 son ${multi15}`)
console.log(`Los suma de los pares es ${pares}`)
*/

// Punto 19
/*
let equilatero = 0
let escaleno = 0
let isoseles = 0

for (i=1; i<=4; i= i+1){
    let ladoA = parseInt(prompt(`Ingrese el valor del lado A del triagulo ${i}`))
    let ladoB = parseInt(prompt(`Ingrese el valor del lado B del triagulo ${i}`))
    let ladoC = parseInt(prompt(`Ingrese el valor del lado C del triagulo ${i}`))

    if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){

        if (ladoA == ladoB && ladoB == ladoC){
            equilatero = equilatero + 1
            console.log(`El triangulo ${i} es equilatero`)
        } else {
            isoseles = isoseles + 1
            console.log(`El triangulo ${i} es isoseles`)
        }
    } else {
        escaleno = escaleno + 1
        console.log(`El triangulo ${i} es escaleno`)
    }
}

console.log(`La cantidad de triangulos equilateros es ${equilatero}`)
console.log(`La cantidad de triangulos isoseles es ${isoseles}`)
console.log(`La cantidad de triangulos escalenos es ${escaleno}`)

if (equilatero < escaleno && equilatero < isoseles){
    console.log(`Hay menos cantidad de equilateros`)
} else {
    if (escaleno < isoseles){
        console.log(`Hay menos cantidad de escalenos`)
    } else {
        console.log(`Hay menos cantidad de isoseles`)
    }
}
*/

// Punto 20
/*
function valor(){
    let num1 = parseInt(prompt(`Ingrese el valor menor`))
    let num2 = parseInt(prompt(`Ingrese el valor mayor`))

    while (num1<=num2){
        console.log(num1)
        num1 = num1 + 1
    }
}
valor()
*/

// Punto 21
/*
function promedio(a,b,c){
    resultado = (a + b + c)/3
    return resultado
}

let num1 = parseInt(prompt('Ingres el valor 1'))
let num2 = parseInt(prompt('Ingres el valor 2'))
let num3 = parseInt(prompt('Ingres el valor 3'))

console.log('El promedio es ' + promedio(num1,num2,num3))
*/

// Punto 22
/*
function sumatoria(){
    let num1 = parseInt(prompt('Ingres el numero 1'))
    let num2 = parseInt(prompt('Ingres el numero 2'))
    let num3 = parseInt(prompt('Ingres el numero 3'))
    let num4 = parseInt(prompt('Ingres el numero 4'))
    let num5 = parseInt(prompt('Ingres el numero 5'))
    let suma = num1+num2+num3+num4+num5
    return suma
}

console.log(sumatoria())
*/

// Punto 23
/*
function frase(){
    let palabra = prompt('Ingrese la palabra')
    let exclama = `¡${palabra}!`
    return exclama
}

console.log(frase())
*/

// Punto 24
/*
function obtenerNombreCompleto(a,b){
    nombreCompleto = a + ' ' + b
    return nombreCompleto
}

let nombre = prompt('Ingrese nombre')
let apellido = prompt('Ingrese apellido')

console.log(obtenerNombreCompleto(nombre,apellido))
*/

// Punto 25
/*
function convertirHorasEnSegundos(a){
    let segundos = a*3600
    return segundos
}

let horas = parseInt(prompt('Ingrese la cantidad de horas'))

console.log(convertirHorasEnSegundos(horas))
*/

// Punto 26
/*
function generarEmail(a,b){
    return `${usuario}@${dominio}.com`
}

let usuario = prompt('Ingrese usuario')
let dominio = prompt('Ingrese dominio')

console.log(generarEmail(usuario,dominio))
*/

// Punto 27
/*
let grados = parseInt(prompt('Ingrese una cantidad de grados Celsius'))

let gradosF = grados * 33.8

console.log(`La conversion de ${grados} grados Celsius a Fahrenheit es : ${gradosF}`)
*/

// Punto 28
/*
let distancia = parseInt(prompt('Ingrese distancia del recorrido'))

let resultadoAPie = distancia / 5
let resultadoEnBicicleta = distancia / 10
let resultadoEnAuto = distancia / 50

console.log(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta}
hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`)
*/

// Punto 29
/*
function puedeVerPelicula(edad,autorizacion){
    return edad >= 15 || autorizacion
}    

console.log(puedeVerPelicula(12,false))
console.log(puedeVerPelicula(12,true))
console.log(puedeVerPelicula(16,false))
console.log(puedeVerPelicula(18,true))
*/

// Punto 30

function esVocal(letra){
    return letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'
}    

console.log(esVocal('a'))
console.log(esVocal('n'))
console.log(esVocal('e'))
