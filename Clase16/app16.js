// metodos del array

// let numeros=[5,8,9,7,2,6,1]
// let palabras=['paola', 'sabrina', 'adelina', 'maria', 'julia']

// numeros.push(29)

// numeros.pop

// numeros.shift()

// numeros.unshift(23, 'Hola mundo')

//numeros.reverse() // Reinvierte el orden de los elementos del array 

//console.log(numeros.lastIndexOf(8))

//console.log(numeros.join('-')) devuelve el contenido del array como una cadena de String. Lo comvierte directaente.
// Dentro del parentesis puedo inresar el caracter que quiero q separe los elemento del array

// palabras.sort() // ordena los string alfabeticamente
// console.log(palabras)
// numeros.sort() // No funciona porq no los ordena de menor a mayor, ya que considera el primer digito. Entre 200 y 33 primero ordena la 200
// console.log(numeros)
// Para que el sort funcione con numeros hay que hacer lo siguiente
// numeros.sort(function(a,b){
//  return a-b
// })
// Si en lugar de hacer a-b hacemos b-a, los ordena de mayor a menor

// DOM

// let lista = document.getElementById('lista')

//let cuerpo = document.getElementById('cuerpo')
// cuerpo.style.backgroundColor='red'

//let micolor=prompt('Ingrese un color')
//cuerpo.style.backgroundColor=`${micolor}`

// Para chequear que se esta llamando a la etiqueta correctamente tengo que escribir en la consola de la paguina el nombre. En este caso lista

// lista.innerText = `hola mundo`

// let texto='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptatum tenetur, aperiam quibusdam unde doloribus facere nihil amet qui iste reprehenderit esse vero suscipit modi quo quia perferendis iusto. Quidem!'

// console.log(texto.length)

//let palabras=['paola', 'sabrina', 'adelina', 'maria', 'julia']

//let recorrer = palabras.length

// for(let i=0; i<recorrer; i=i+1){
//     console.log(palabras[i])
//     lista.innerHTML += `<li>${palabras[i]}</li>`
// }

// acumulador = acumulador + valor
// acumulador+=valor

// METODOS ANIDADOS DENTRO DE OTROS METODOS

// let numeroAleatorio = Math.random() * 50

// let resultado = Math.floor(numeroAleatorio)

// console.log(resultado)


let cuerpo=document.getElementById('cuerpo')
let btn=document.getElementById('btn')
let textoColor=document.getElementById('textoColor')

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function haceClick(){
let hexcolor='#'
for(let i=0; i<6; i++){
    hexcolor=`${hexcolor}${hex[obtenerNumero()]}`
    console.log(hexcolor)
}
cuerpo.style.backgroundColor=hexcolor
textoColor.innerHTML=hexcolor
}

function obtenerNumero(){
    let resultado = Math.floor(Math.random() * hex.length)
    return resultado
}


let hora=document.getElementById('hora')

function miHora(){
let miVariable = new Date()
hora.innerHTML=`<i>${miVariable.getHours()}:${miVariable.getMinutes()}:${miVariable.getSeconds()}</i>`
}

setInterval(miHora,1000)
setInterval(haceClick,2000)