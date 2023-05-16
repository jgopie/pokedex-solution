import './App.css'
import { FilteredPokedexTable } from './components/filterted-pokedex-table/filtered-pokedex-table.component';



function App() {
  const pokemonArray = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://pokemon.com/pictures/bulbasaur.png"
    },
    {
      id: 2,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://pokemon.com/pictures/bulbasaur.png"
    },
    {
      id: 3,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://pokemon.com/pictures/bulbasaur.png"
    }
  ];


  return (
    <>
      <FilteredPokedexTable props={pokemonArray}/>
    </>
  )
}

export default App
