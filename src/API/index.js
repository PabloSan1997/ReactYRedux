import axios from "axios"

 async function getPokemons(){
    try {
        const datos = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        return datos.data;
    } catch (error) {
        console.error(error, "Hubo un pequeño error");
        return [];
    }
}
async function getPokemonsDetails(elemento){
    try {
        const mas = await axios.get(elemento.url);
        return await mas.data;
    } catch (error) {
        console.log('Error al leer datos especificos');
    }
}
export{getPokemons, getPokemonsDetails}