// Array - Vectores - Arreglos

// Estructura de datos qpermite almacenar elemento y luego acceder a los mismo por medio de sub indices

// Puede almacenar datos de distintos tipos y tamaños

/*
let array = [] // array vacio

let array2 = [56, 'hola mundo', 3.06, 't', true, ['hola', 100]]

console.log(array2[3]) // llama la tercer posicion del array2


console.log(array2[5] [0]) // El 5 llama la posicion 5 del array2 y el 1 llama la posicion 1 del array dentro del array
*/

// Recorrer un array

// let array = [56, 'hola mundo', 3.06, 't', true, 5]

// Con FOR

// for (let i=0; i<=5; i=i+1){
//     console.log(array[i])
// }

// Con FOR OF

// for( let y of array){
//     console.log(y)
// }

// Con WHILE

// let x=0

// while(x<=5){
//     console.log(array[x])
//     x=x+1
// }


/*
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
*/

// Metodos en JS - Son como funciones ya establecidas por el lenguaje que facilitan el codigo

// let numeros=[25,96,1,35,9,29]

// Metodos basicos

// PUSH - Es para agregar un valor al final del array

// numeros.push(26)
// console.log(numeros)

// Propiedad - Devuelve la cantidad de elementos en un array

// Length
// console.log(numeros.length)

// POP - Saca el ultimo elemento del array, no lo elimina. Sirve para crear una variable y inicializarla con ese ultimo elemento, por ejemplo.
// Ejemplo en cuaderno

// let resultado=numeros.pop()
// console.log(resultado) 
// numeros.pop()
// console.log(numeros)

// UNSHIFT - Agrega un valor al comienzo del array

// numeros.unshift(12)
// console.log(numeros)


// SHIFT - Como el POP pero saca el primer elemento del array

// numeros.shift()
// console.log(numeros)

// SPLICE - Permite eliminar elementos del array que esten en cualquier posicion y agregar otros que ocupen esas posiciones
// ejemplo= numeros.splice(1,5,'hola') - elimina elementos desde la primera posicion, elimina 5 y agrega 'hola' al array

// numeros.splice(2,2,'hola')
// console.log(numeros)

// INDEX OF
// Devuelve el indice que ocupa un elemento

// console.log(numeros.indexOf(1))


// DOM


// console.log(document) // Devuelve por consola todo el cuerpo del HTML

// console.log(document.getElementById('contenedor')) // Devuelve por consola el elemnto contenedor del HTML y sus hijos

// Esto se puede guardar dentro de una variable

let contenedor = document.getElementById('contenedor')

console.log(contenedor) 

contenedor.innerText = 'Hola mundo' // innerText permite agregar texto dentro de contenedor del HTML desde JS

contenedor.innerHTML = '<h1>hola mundo</h1>' /* ineerHTML sirve para agregar etiquetas, texto, class o lo que sea al HTML desde JS
Se utiliza para agregar los elementos que son dinamicos, es decir, los q tienen un contenido en la paguina que va variando. Los elementos 
que son estaticos, como titulos o cosas asi, se siguen agregando desde el HTML directamente. El elemento al que voy a agregarlo debe estar
identidicado por ID. Si lo identifico con una class se usa querySelector en lugar de getElementById. Quedaria asi
document.querySelector('.contenedor'). El querySelector tmb funciona con ID pero antes de nombrarlo se pone un # en vez de un .
*/





