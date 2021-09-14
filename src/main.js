import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// importa la data de pokemones 

const arrayPokemones= data.pokemon;
const mostrarPokemones= (arregloMostrar) => {
    const divPokemones= document.createElement("div");
    const containerdiv= document.querySelector("#container");
    containerdiv.innerHTML= ""
    //document.getElementById("conteiner");
    //document.querySelector(".container");
    arregloMostrar.forEach(poke=>{
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
        divPokemon.appendChild(baseDefense);
        divPokemon.appendChild(baseAttack);
        divPokemon.appendChild(divImage);
        divPokemones.appendChild(divPokemon);
      
        

    }) 
    document.querySelector(".container").appendChild(divPokemones);
}
window.addEventListener("Load", (mostrarPokemones(arrayPokemones)));

//ordenar
const selectElement = document.querySelector('#formOrder');

selectElement.addEventListener('change', (event) =>{
    
    const order = document.querySelector ('.result');
    let selectOrder = arrayPokemones;
    let resultNew = selectOrder.sort(
        (a, b) => { 
        if(a.name === b.name){ 
            return 0
        
        }
        else if(a.name > b.name){
            return 1
        }
        else if(a.name < b.name){
            return -1
        }
    }
        );
        const desendente = resultNew.reverse();
        console.log(desendente);
        mostrarPokemones(resultNew);
    console.log(resultNew);
    console.log(event)

   
});


    
//filtrado por defensa
    let filterBest = document.getElementById("attack")
    filterBest.addEventListener("click", (e) =>{ 
console.log("filterBest")
      let attackValue = parseInt(document.getElementById("attack").value);
      let filterPok
      if (attackValue === 100) {
         filterPok = arrayPokemones.filter((pokemon) =>{
        let filtradoAtaque = parseInt(pokemon.stats["base-attack"]) <= attackValue;
        return filtradoAtaque
        })
        mostrarPokemones (filterPok)
        }
      else if (attackValue === 200) {
            filterPok = arrayPokemones.filter((pokemon) =>{
           let filtradoAtaque = parseInt(pokemon.stats["base-attack"]) >=100 && parseInt(pokemon.stats["base-attack"]) <= attackValue;
           return filtradoAtaque
           })
           mostrarPokemones (filterPok)
           }
      else if (attackValue === 300) {
            filterPok = arrayPokemones.filter((pokemon) =>{
           let filtradoAtaque = parseInt(pokemon.stats["base-attack"]) >=200 && parseInt(pokemon.stats["base-attack"]) <= attackValue;
           return filtradoAtaque
           })
           mostrarPokemones (filterPok)
           }
    })

// filtrado por 

let filtradoDefensa= document.getElementById("defense")
filtradoDefensa.addEventListener("click", (e) =>{ 
console.log("filtrado")
  let defenseValue= parseInt(document.getElementById("defense").value);
  let defenseNew
  if (defenseValue === 100) {
  console.log(100)
     defenseNew = arrayPokemones.filter((pokemon) =>{
    let filtradoDefensa = parseInt(pokemon.stats["base-defense"]) <= defenseValue;
    return filtradoDefensa
    })
    mostrarPokemones(defenseNew)

    }
  else if (defenseValue === 200) {
    console.log("200")
        defenseNew = arrayPokemones.filter((pokemon) =>{
       let filtradoDefensa = parseInt(pokemon.stats["base-defense"]) >=100 && parseInt(pokemon.stats["base-defense"]) <= defenseValue;
       return filtradoDefensa
       })
       mostrarPokemones(defenseNew)
       }
  else if (defenseValue === 300) {
        defenseNew = arrayPokemones.filter((pokemon) =>{
       let filtradoDefensa = parseInt(pokemon.stats["base-defense"]) >=200 && parseInt(pokemon.stats["base-defense"]) <= defenseValue;
       return filtradoDefensa
       })
       mostrarPokemones(defenseNew)
       }
})





//Filter
let filterType = document.getElementById("filterType");
filterType.addEventListener ("change", () =>{
    let filter = document.querySelector('#contenedor')
    let newArray = arrayPokemones.filter(element => element.type[0]) 
      
    //( type => type === type);
    
        console.log(newArray);
    });
    