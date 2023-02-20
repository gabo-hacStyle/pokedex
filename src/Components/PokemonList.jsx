import { PokemonCard }  from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({pokemons}) => {
    console.log(pokemons)
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => (
                <PokemonCard 
                name={pokemon.name}
                key={pokemon.name}
                image={pokemon.sprites.front_default}
                abilities={pokemon.abilities}
                />    
            ))}
        </div>
    )
}
PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}
export {PokemonList}