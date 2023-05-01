
// OBJETO LITERAL
/*const datos={
    nombre:'Julio',
    apellido:'lopez',
    edad: 45
}
*/

const getPersonajes = () => {
    fetch("https://rickandmortyapi.com/api/character")
    // .then funciona como el metodo .map
    // El .json convientes el json a un array de objetos
    .then(response=>response.json())
    .then(data=>mostrarPersonajes(data.results))
    .catch(error=>console.log(error))
    .finally(()=>console.log(`finalizo la conexcion a la api`))

}

getPersonajes()


const mostrarPersonajes = (personajes) => {

    for(let personaje of personajes){
        console.log(personaje)
    }

}





