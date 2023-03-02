import { PokemonCard } from "./PokemonCard.jsx";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {

  return (
    <div className='PokemonList'>
        {pokemons.map(elemento=>(
            <PokemonCard key={elemento.name} name={elemento.name} imagen={elemento.sprites.front_default}/>
        ))}
    </div>
  );
};

export{PokemonList}