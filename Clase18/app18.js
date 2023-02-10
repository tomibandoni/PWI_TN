// // Operador de NEGACION  !

// let esVerdadero = true


// if(esVerdadero){
//     console.log(`salio por verdadero`)
// }
// else{
//     console.log(`salio por falso`)
// }

// // Operador ternario

// esVerdadero ? console.log(`salio por verdadero`) : console.log(`salio por falso`)

// FUNCIONES

// Tres tipos de variables VAR, LET y CONSt

// const pi = 3.14

// CONST es para variables q van a tener siempre el mismo valor, es decir q no se van a poder cambiar





// TIPOS DE FUNCIONES
// FUNCIONES NOMBRADAS
// FUNCIONES DEL TIPO FLECAH O ARROW
// FUNCIONES ANONIMAS


// FUNCIONES ARROW

// const miFuncion=()=>{
//     console.log(`Hola mundo`)
// }
// miFuncion()


// // FUNCIONES ANONIMAS

// ()=>{

// }


// SCOPES o  AMBITO

// Crear un ambito es eso de poner if y entre () true para q se ejecute siempre el if

// if (true){
//     var nombre = 'pepe'
//     let edad = 40
//     const apellido = 'suarez'
//     console.log(edad)
// }

// Las variables VAR pueden crearce dentro o fuera del FOR y ser usadas dentro o fuera del FOR. En cambio, la variables LET y CONST si se crean dentro del FOR solo se pueden usar dentro del FOR



// function miFuncion(a,b){
//     console.log(`Hola mundo`)
// }

// miFuncion()


// FORMULARIO

// let usuario=document.getElementById('usuario-input')
// // console.log(usuario)

// // console.log(usuario.value) 

// let numeroUno=document.getElementById('numeroUno')
// console.log(numeroUno)

// let resultado = numeroUno.target.value
// // console.log(resulatdo)

// let nombre=document.getElementById('usuario-input')
// let form=document.getElementById('formulario')

// const enviarFormulario = (event) => { 
// event.preventDefault()
// // console.log(event) esto me va a devolver todas las propiedades que tiene el event
// let usuario = event.target.usuario.value

// console.log(typeof(usuario))

// console.log(Number(usuario))

// let resultadoFinal=usuario+25
// console.log(resultadoFinal)

// console.log(event.target.usuario.value)
// console.log(event.target.contrasenia.value)
// }

// form.addEventListener('click',enviarFormulario)

let btnSumar=document.getElementById('btn')


const sumarNumeros = () => { 

    let numeroUno=Number(document.getElementById('numeroUno').value)
    let numeroDos=Number(document.getElementById('numeroDos').value)
    let resultadoSuma=document.getElementById('resultadoSuma')

    let resultado = numeroUno + numeroDos
    resultadoSuma.innerHTML=`$${resultado}`
}

btnSumar.addEventListener('click',sumarNumeros)




