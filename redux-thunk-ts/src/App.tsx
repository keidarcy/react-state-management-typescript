import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootStore } from './store';
import { GetPokemon } from './actions/PokemonActions';

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('');
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setPokemonName(event.target.value);

  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
      {pokemonState.pokemon && (
        <>
          <img src={pokemonState.pokemon.sprites.front_default} alt={pokemonName} />
          {pokemonState.pokemon.abilities.map((a) => (
            <p>{a.ability.name}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
