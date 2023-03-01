import { PokemonCard } from "./PokemonCard.jsx";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
        {pokemons.map(elemento=>(
            <PokemonCard key={elemento}/>
        ))}
    </div>
  );
};

export{PokemonList}