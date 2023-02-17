import './App.css'
import { PokemonList } from './Components/PokemonList'
import { Searcher } from './Components/Searcher'

function App() {
  return (
    <div className="App">
      <Searcher />
      <PokemonList />
    </div>
  )
}

export default App
