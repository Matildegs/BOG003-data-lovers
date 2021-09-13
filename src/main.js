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

//ordenar
const selectElement = document.querySelector('#formOrder');
console.log(selectElement);
selectElement.addEventListener('change', (event) =>{
    
    const order = document.querySelector ('.result');
    let selectOrder = arrayPokemones; 
    let resultNew = selectOrder.sort(
       (a, b) =>{ 
        if(a.name === b.name){ 
            return 0
        
        }
        else if(a.name > b.name){
            return 1
        }
        else if(a.name < b.name){
            return -1
        }
    });
    
    console.log(resultNew);
    console.log(event)
});

    
//filtrado por defense
   /* const filterBest = document.getElementById("formAttack");
    filterBest.addEventListener ("change", () =>{
        let filtrado = arrayPokemones;})*/
const defense = mostrarPokemones.filter((mostrarPokemon) =>{
    return mostrarPokemones.defense > 150;
})
console.log(defense);

// "base-attack": "118",
//"base-defense": "111",


//Filter
