import { PokemonCard }  from "./PokemonCard";
import './PokemonList.css';
import { StarButton } from "./StarButton";
import { Card } from "antd";
import Meta from 'antd/lib/card/Meta'

const PokemonList = ({pokemons}) => {
    console.log(pokemons)
    const renderHabilities = (abilities) => {
        return abilities.map(ability => ability.ability.name).join(', ')
    }
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.name}                
                    render={() => (                       
                        <Card
                            title={pokemon.name}
                            cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
                            extra={<StarButton isFavorite={pokemon.favorite} id={pokemon.id} />}
                            >
                            <Meta description={renderHabilities(pokemon.abilities)} />

                        </Card>      
                )}
                />   
            ))}
        </div>
    )
}
PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}
export {PokemonList}