import { PokemonCard } from "./PokemonCard.jsx";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  let a = 0;
  return (
    <div className='PokemonList'>
        {pokemons.map(elemento=>(
            <PokemonCard key={elemento.name} name={elemento.name}/>
        ))}
    </div>
  );
};

export{PokemonList}