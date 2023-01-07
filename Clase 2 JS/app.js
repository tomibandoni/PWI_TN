/*let avanzar = true

if( avanzar == true){
    console.log('Puede avanzar')
} else {
    console.log('No puede avanzar')
}*/

// Estructura condicional anidada
/*
let nota1 = parseInt(prompt('Ingrese la primer nota'))
let nota2 = parseInt(prompt('Ingrese la segunda nota'))
let nota3 = parseInt(prompt('Ingrese la tercer nota'))

let resultado = (nota1+nota2+nota3)/3

if( resultado >= 7){
    console.log('Aprobo')
} else {
    if (resultado >= 4){
        console.log('Regular')
    } else {
        console.log('Desaprobado')
    }
}
*/

// Operadores logicos y &&

/*
let nota1 = parseInt(prompt('Ingrese la primer nota'))
let nota2 = parseInt(prompt('Ingrese la segunda nota'))
let nota3 = parseInt(prompt('Ingrese la tercer nota'))

if(nota1 > nota2 && nota1 > nota3){
    console.log('La nota mayor es la primera')
} else {
    if (nota2 > nota1 && nota2 > nota3){
        console.log('La nota mayor es la segunda')
    } else {
        console.log('La nota mas alta es la tercera')
    }
}
*/

// Operador cortocircuito o circuito corto

/*
let avanzar = true
 
    avanzar && console.log('Puede avanzar')
    */

// Operador logico O ||
/*
let dia = parseInt(prompt('Ingrese dia'))
let mes = parseInt(prompt('Ingrese mes'))
let anio = parseInt(prompt('Ingrese año'))

if (mes == 1 || mes == 2 || mes == 3){
    console.log('Corresponde al primer trimestre')
} else {
    console.log('No Corresponde al primer trimestre')
}
*/

//Trabajo practico
/*
//Punto 1

let nombre = prompt('Ingrese nombre')
console.log(nombre)

//Punto 2

let edad = parseInt(prompt('Ingrese su edad'))
console.log(edad)

// Punto 3 y 6

let hijos = prompt('Tiene hijos? si/no')

if (hijos == "si"){
    console.log('Tiene hijos')
} else { 
    if (hijos == "no") {
    console.log('No tiene hijos')
} else {
    console.log('Ingrese una opcion valida')
}
}


// Punto 4

let salario = parseInt(prompt('Ingrese salario mensual'))

let salarioanual = salario*12

console.log(salarioanual)


// Punto 5

let edad = parseInt(prompt('Ingrese edad'))

if (edad >= 18){
    console.log('Mayor de edad')
} else {
    console.log('Menor de edad')
}

// Punto 7

let genero = prompt('¿Eres hombre o mujer? h/m')

if (genero == 'h'){
    console.log('Eres Hombre')
} else {
    if (genero == 'm') {
        console.log('Eres mujer')
    } else {
        console.log('Ingrese una opcion valida')
    }
}

// Punto 8

let lado = parseInt(prompt('valor del lado'))
console.log('Perimetro', lado*4)


// Punto 9

let numero1 = parseInt(prompt('numero 1'))
let numero2 = parseInt(prompt('numero 2'))
let numero3 = parseInt(prompt('numero 3'))
let numero4 = parseInt(prompt('numero 4'))

console.log('Suma', numero1 + numero2)
console.log('Multi', numero3 * numero4)


// Punto 10

let numero = parseInt(prompt('Ingrese un nuemro entre 1 y 99'))

if (numero >= 1 && numero <= 9){
    console.log('El numero tiene un digito')
} else {
    if (numero >= 10 && numero <= 99){
        console.log('El numero tiene dos digitos')
    } else {
        console.log('Ingrese un numero valido')
    }
}


// Punto 11

let numero = parseInt(prompt('Ingrese un nuemro'))

if (numero > 0){
    console.log('El numero es positivo')
} else {
    if (numero < 0){
        console.log('El numero es negativo')
    } else {
        console.log('El numero es 0')
    }
}


// Punto 12

let edad = parseInt(prompt('Ingrese edad'))
let tienePermiso = prompt('¿Tiene permiso? si/no')

if (edad >= 18 && tienePermiso == 'si'){
    console.log('Puede manejar')
} else {
    console.log('No puede manejar')
}


// Punto 13

let dinero = prompt('¿Tiene dinero? s/n')
let tarjeta = prompt('¿Tiene tarjeta? s/n')

if (dinero == 's' || tarjeta == 's'){
    console.log('Puede pagar')
} else {
    console.log('No puede pagar')
}


// Punto 14

let jueves = prompt('¿Es jueves?')

if (jueves != 's'){
    console.log('No es jueves')
} else {
    console.log('Es jueves')
}


// Punto 15

let fecha = prompt('Ingrese una fecha dd/mm')

if (fecha == '25/12'){
    console.log('Es navidad')
} else {
    console.log('No es navidad')
}
*/

// Punto 16

let sueldo = parseInt(prompt('Ingrese sueldo'))
let anios = parseInt(prompt('Ingrese antiguedad'))

if (sueldo < 500 && anios >= 10){
    console.log('Sueldo a pagar', sueldo*1.2)
} else {
    if (sueldo < 500 && anios < 10){
        console.log('Sueldo a pagar', sueldo*1.05)
    } else {
        console.log('Sueldo a pagar', sueldo)
    }
}