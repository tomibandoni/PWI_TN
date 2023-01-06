//comentario de una sola linea

/*comentario 
en mas 
de una linea */




// Tipos de datos

/* numericos
desde el - infinito al + infinito
Abarca todos los numeros reales 

Cadena de caracteres o String 

Valores Logicos (True y False o 1 y 0)*/

//Decalracion de Variables

/*var numero = 96

let palabras = 'pedro'

const numeroDePi = 3.1416

let esNuevo = true

let numero = 101 */

/*let numero = 63

console.log('el valor inicial de numero es ', numero)

let nuevoNumero = 0

console.log('el valor de nuevoNumero es ', nuevoNumero)

nuevoNumero = numero

console.log('este es el valor de la ultima variable', nuevoNumero)
*/
/*
let nombre = 'juan pedro'
let edad = 36
let estadoCivil = 'casado'
let sabeProgramar = false
*/

// Este concatenado se puede ahcer pero no se utiliza mas, no son buenas practicas
/*console.log('Tu nombre es ', nombre, 'y tu edad es ', edad, 'años y tu estado civil es ', estadoCivil)
console.log('Tu nombre es '+ nombre + ' y tu edad es '+ edad + ' años y tu estado civil es '+ estadoCivil)*/

// en cambio se utiliza 
// templete string

//console.log(`Tu noombre es ${nombre} y tu edad es ${edad} años y tu estado civil es ${estadoCivil}`)

//Entrada de datos por teclado

//let guardoNombre = prompt('Ingrese su nombre')
//console.log(guardoNombre)
//let guardoEdad = prompt('Ingrese su edad')

/*
let numero1 = prompt('ingresa el primer numero')

let numero2 = prompt('ingresa el segundo numero')

//let resultadoMulti = numero1 * numero2
//let resultadoDivi = numero1 / numero2
//let resultadoResto = numero1 % numero2
//let resultadoResta = numero1 - numero2
let resultadoSuma = numero1 + numero2
console.log(resultadoSuma)

*/

// Estructura condicional simple
/*
if (variable        <                valorOvariable) {
    variable    op. relacional        valor tipo numerico, string o boolean

}
*/
//Operadores relacionales
/*
> mayor
>= mayor o igual
< menor
<= menor o igua
!= distinto
== igual igual
=== estrictamente igual
*/

/*let nota = parseInt(prompt('Ingrese la nota del alumno')) 

if (nota >= 5 ){
    console.log('Aprobado')
}*/

//Estructura condicional compuesta

let notaAprobado = 5

let nota = parseInt(prompt('Ingrese la nota del alumno')) 

/*
if (nota >= notaAprobado ){
    console.log('Aprobado')
} else {
    console.log('No aprobo')
}*/

//Operador ternario
 
nota >= notaAprobado ? console.log('Aprobado') : console.log('No aprobo')