import './App.css'
import { getPokemonsWithDetails, setLoading } from './actions';
import { PokemonList } from './Components/PokemonList'
import { Searcher } from './Components/Searcher'
import { Col, Spin } from 'antd'
import { useEffect } from 'react'
import { getPokemons } from './api'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Counter } from './Components/Counter';

function App() {

  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual));
  const loading = useSelector(state => state.getIn(['ui', 'loading']))
  const dispatch = useDispatch();  

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
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
      <Counter />
      {loading ? <Col offset={12}>
        <Spin spinning size='large'/>
      </Col> : <PokemonList pokemons={pokemons} />
      }  
      
        
    </div>
  );
}


export default App;