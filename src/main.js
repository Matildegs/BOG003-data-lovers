import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// importa la data de pokemones 

const arrayPokemones = data.pokemon;
const mostrarPokemones = (arregloMostrar) => {
    const divPokemones = document.createElement("div");
    const containerdiv = document.querySelector("#container");
    containerdiv.innerHTML = ""
    //document.getElementById("conteiner");
    //document.querySelector(".container");
    arregloMostrar.forEach(poke => {
        const parrafoNombre = document.createElement("h2");
        parrafoNombre.innerHTML = poke.name;
        const typePokemon = document.createElement("h3");
        typePokemon.innerHTML = poke.type;
        const baseAttack = document.createElement("h3");
        baseAttack.innerHTML = poke.stats['base-attack'];
        const baseDefense = document.createElement("h3");
        baseDefense.innerHTML = poke.stats['base-defense'];
        const divImage = document.createElement("img");
        divImage.classList.add("imgPoke");
        divImage.src = poke.img;
        const divPokemon = document.createElement("div");
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
window.addEventListener("Load", (mostrarPokemones(arrayPokemones)));

//ordenar
const selectElement = document.querySelector('#formOrder');

selectElement.addEventListener('change', (event) => {

    const order = document.querySelector('.result');
    let selectOrder = arrayPokemones;
    let resultNew = selectOrder.sort(
        (a, b) => {
            if (a.name === b.name) {
                return 0

            }
            else if (a.name > b.name) {
                return 1
            }
            else if (a.name < b.name) {
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
function filtrar() {
    let filterBest = document.getElementById("formAttack");
    filterBest.addEventListener("change", () => {
        console.log("Hola")
        let filtrado = arrayPokemones;
    })
    const defense = mostrarPokemones.filter((mostrarPokemon) => {
        return mostrarPokemon.defense > 150;
        let filtrado = arrayPokemones;



    })
}


// "base-attack": "118",
//"base-defense": "111",


//Filter
let filterType = document.getElementById("filterType");
filterType.addEventListener("change", (evt) => {
    let filter = document.querySelector('#contenedor')
    const selected = evt.target.selectedOptions[0].outerText;
    let newArray = arrayPokemones.filter(element => element.type[0] == selected.toLowerCase())

    //( type => type === type);

   console.log(newArray); 
});
