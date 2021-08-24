import data from './data/pokemon/pokemon.js';
// importa la data de pokemones 

const arrayPokemones= data.pokemon;
const mostrarPokemones= () => {
    const divPokemones= document.createElement("div");
    arrayPokemones.forEach(poke=>{
        const parrafoNombre= document.createElement("p");
        parrafoNombre.innerHTML= poke.name;
        console.log(parrafoNombre)
        const divImage= document.createElement("img");
        divImage.classList.add("imgPoke");
        divImage.src= poke.img; 
        console.log(divImage.src)
        const divPokemon= document.createElement("div");
        divPokemon.classList.add("tarjetaPokemon");

        divPokemon.appendChild(parrafoNombre);
        divPokemon.appendChild(divImage);
        divPokemones.appendChild(divPokemon);
       
        

    }) 
    document.querySelector(".container").appendChild(divPokemones);
}
window.addEventListener("Load", (mostrarPokemones()));



const formOrder= document.querySelector('#formOrder');
const formAttack= document.querySelector('#formAttack');



const orderAscendente= mostrarPokemones;
console.log(orderAscendente.sort());









// console.log(example, data)
