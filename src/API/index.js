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

export{getPokemons}