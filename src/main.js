import data from './data/pokemon/pokemon.js';
// importa la data de pokemones 

const arrayPokemones= data.pokemon;
const mostrarPokemones= () => {
    const divPokemones= document.createElement("div");
    arrayPokemones.forEach(poke=>{
        const parrafoNombre= document.createElement("h2");
        parrafoNombre.innerHTML= poke.name;
        const typePokemon = document.createElement("h3");
        typePokemon.innerHTML = poke.type;
        const baseAttack = document.createElement("h3");
        baseAttack.innerHTML = poke.stats['base-attack'];
        const baseDefense = document.createElement("h3");
        baseDefense.innerHTML = poke.stats['base-defense'];
        const divImage= document.createElement("img");
        divImage.classList.add("imgPoke");
        divImage.src= poke.img; 
       const divPokemon= document.createElement("div");
        divPokemon.classList.add("tarjetaPokemon");

        divPokemon.appendChild(parrafoNombre);
        divPokemon.appendChild(typePokemon);
        divPokemon.appendChild(baseAttack);
        divPokemon.appendChild(baseDefense);
        divPokemon.appendChild(divImage);
        divPokemones.appendChild(divPokemon);
      
        

    }) 
    document.querySelector(".container").appendChild(divPokemones);
}
window.addEventListener("Load", (mostrarPokemones()));


const selectElement = document.querySelector('#formOrder');

selectElement.addEventListener('change', (event) =>{
    
    const order = document.querySelector ('.result');
    let selectOrder = arrayPokemones;
    let resultNew = selectOrder.sort(
        (a, b) => { 
        if(a.num === b.num){ 
            return 0
        
        }
        else if(a.num > b.num){
            return 1
        }
        else if(a.num < b.num){
            return -1
        }
    }
        );
    console.log(resultNew);
    console.log(event)
   
});
    
//Filter
let filter = document.getElementById("filterType");
filter.addEventListener ("change", () =>{
    
    let pokemonesFiltrados = arrayPokemones;
    let newArray = pokemonesFiltrados.filter(
        
    )

        console.log(filter.type)
});