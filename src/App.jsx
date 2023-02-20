import './App.css'
import { setPokemons } from './actions';
import { PokemonList } from './Components/PokemonList'
import { Searcher } from './Components/Searcher'
import { Col } from 'antd'
import { useEffect } from 'react'
import { getPokemonDetails, getPokemons } from './api'
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();  

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      const detailedPokemons = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(detailedPokemons));
    }
    fetchPokemons()
  }, [])
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src='https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg' 
        alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

    <PokemonList pokemons={pokemons} />    

    </div>
  );
}


export default App;