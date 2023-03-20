// OBJETOS LITERALES

// const usuarios = {
//     nombre:'miguel',
//     edad:23,
//     estadoCivil:true,
//     amigos:['julian','emilio','juana']
// }

// console.log(usuarios.amigos[1])

// ARRAY DE OBJETOS
/*
const usuarios = [{
    nombre:'miguel',
    edad:23,
    estadoCivil:true,
    amigos:['julian','emilio','juana']
},{
    nombre:'fania',
    edad:25,
    estadoCivil:false,
    amigos:['mario','julio']
}]

console.log(usuarios[1].edad)
*/
/*
let perfil = {
    nombre:'olivia',
    apellido:'marsu',
    edad:21
}

const presentacion = (datos) => { 
    
    return `Hola, mi nombre es ${datos.nombre} ${datos.apellido} y tengo ${datos.edad} años`
}
 
console.log(presentacion(perfil))
*/
/* RETORNO IMPLICITO SIN RETURN (SE HACE CUANDO SE TIENE UNA SOLA LINEA DE CODIGO)

const presentacion = (datos) => `Hola, mi nombre es ${datos.nombre} ${datos.apellido} y tengo ${datos.edad} años`
*/
/*
let song = {
    title: 'Rock and Roll',
    bandName: 'Led Zeppelin',
    duration: 166000,
    album: 'Led Zeppelin IV'
}

const nombreCancion = (cancion) => { 

    let titulo = cancion.title
    let banda = cancion.bandName
    let duracion = cancion.duration/1000

    let miTraduccion={
        titulo:titulo,
        banda:banda,
        duracion:duracion
    }

    return miTraduccion
}

console.log(nombreCancion(song))
*/

/*
let datos = {
    id:1,
    nombre:'Ada',
    apellido:'Lovelace',
    email:'ada.lovelace@gmail.com',
    telefono:'1234567890',
    edad:'29',
    programa: true,
}

const modificar = (numero) => { 
    datos.telefono = numero
}


console.log(modificar('1110'))
*/
/*
let perfil = {
    id: 123456789,
    nombre: 'Ada Lovelace',
    url: 'https://www.linkedin.com/in/ada-lovedace',
    habilidades: ['HTML','CSS','SASS']
}

const agregoHabilidades = (datos,nuevo,nuevoDos) => { 

    console.log(datos.habilidades.push(nuevo,nuevoDos))
    console.log(datos.habilidades)

}

console.log(agregoHabilidades(perfil,'react','Java'))
*/

const usuarios = [{
    nombre:'miguel',
    edad:23,
    estadoCivil:true,
    amigos:['julian','emilio','juana'],
    padre: 'juancho'
},{
    nombre:'fania',
    edad:25,
    estadoCivil:false,
    amigos:['mario','julio'],
    foto:'http:foto.jpg'
}]

// for(let usuario of usuarios){
//     console.log(usuario)
// }


// METODOS AVANZADOS

// MAP
/*
let numeros=[1,2,3,4,5,6,7]

let resultado = numeros.map(elemento=>elemento*10)
console.log(resultado)

let nombres = ['maria', 'julia']

let resultadoDos = nombres.map(elemento=>`! ${elemento} ¡`)
console.log(resultadoDos)
*/

// FILTER
/*
let numeros=[1,2,3,4,5,6,7]

let resultado = numeros.filter(elemento=>elemento<4 || elemento == 6)
console.log(resultado)
*/

const contenedor = document.getElementById("contenedor")

const productos = [
    {
        title: "iphone15",
        price: 2600,
        description: "lorem impsum...",
        id: 123213
    },
    {
        title: "iphone12",
        price: 200,
        description: "lorem impsum...",
        id: 112321
    },
    {
        title: "iphone19",
        price: 100,
        description: "lorem impsum...",
        id: 123123
    }
]

const renderizarProductos = (listaDeProductos) => {

    if(listaDeProductos.length < 1){
        contenedor.innerHTML = "<h2>No hay productos que mostar</h2>"
    } else {
        contenedor.innerHTML = ""
        listaDeProductos.forEach((producto) =>{
            contenedor.innerHTML += `
                <div class="carta">
                    <h3>Nombre: ${producto.title} </h3>
                    <p>Precio: ${producto.price} </p>
                    <p>Descripcion: ${producto.description} </p>
                    <button class="btn-comprar" id="btn-comprar-${producto.id}">Comprar</button>
                </div>
            `
        })
        const botonesDeCompra = document.getElementsByClassName("btn-comprar")
        console.log(botonesDeCompra)
        for(const boton of botonesDeCompra){
            boton.addEventListener("click", (event) =>{
                console.log(Number(event.target.id.split("-").pop()))
            })
        }
    }
}

renderizarProductos(productos)







