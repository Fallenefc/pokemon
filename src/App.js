import React from 'react';
import './App.css';
import axios from "axios";

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchedPokemon from './components/SearchedPokemon';

function App() {

  // Setting Variables and States

  const [pokemonName, setPokemonName] = React.useState('')
  const [pokemonId, setPokemonId] = React.useState('')
  const [pokemonImg, setPokemonImg] = React.useState('')

  const [pokemonAbilities, setPokemonAbilities] = React.useState([])
  const [pokemonBaseStats, setPokemonBaseStats] = React.useState([])
  const [pokemonTypes, setPokemonTypes] = React.useState([])


  const [pokemonHeight, setPokemonHeight] = React.useState('')
  const [pokemonWeight, setPokemonWeight] = React.useState('')

  // const [pokemon, setPokemon] = React.useState({})

  const onFormSubmit = async searchterm => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchterm}`)

    // Setting States

    setPokemonId(response.data.id)
    setPokemonName(response.data.name)
    setPokemonImg(response.data.sprites.front_default)

    // Setting States for Pokemon Data

    
    // setPokemonBaseStats(response.data.stats)

    // Pokemon Types
    const typesArray = [response.data.types[0].type.name]
    if (response.data.types.length === 2) { typesArray.push(response.data.types[1].type.name) }
    setPokemonTypes(typesArray)

    // Pokemon Abilities
    const pokeAbilities = response.data.abilities
    const abilitiesArray = []

    pokeAbilities.forEach(function (ability) {
      abilitiesArray.push(ability.ability.name)
    })

    setPokemonAbilities(abilitiesArray)

    // Pokemon Base Stats
    const pokeStats = response.data.stats
    const statsValues = []

    pokeStats.forEach(name => {
      statsValues.push(name.base_stat)
    })

    setPokemonBaseStats(statsValues)

    console.log(pokemonBaseStats)
    console.log(statsValues)

    // Pokemon Weight and Height

    setPokemonWeight(response.data.weight)
    setPokemonHeight(response.data.height)
    // setPokemon(response.data)
    console.log(response.data)
  }

  return (
    <div>
      <Header />
      <SearchBar SubmitFunction={onFormSubmit} />
      <SearchedPokemon 
      name={pokemonName}
      id={pokemonId}
      img={pokemonImg}
      abilities={pokemonAbilities}
      baseStats={pokemonBaseStats}
      types={pokemonTypes}
      weight={pokemonWeight}
      height={pokemonHeight}
      />
    </div>
  )
}

export default App;
