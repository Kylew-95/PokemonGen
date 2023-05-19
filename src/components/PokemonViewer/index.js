import React, { useEffect, useState } from "react";

const API_KEY = "7c3157ed-bab4-4159-87f4-991cd91e9bf5";

function PokemonViewer({ id, addFavourite }) {
  const [pokemon, setPokemon] = useState({});
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?id=${id}`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      const data = await response.json();
      setPokemon(data.data[id]);
    }
    getPokemon();
  }, [id]);

  function handleAddFavourite() {
    setFavourite((prevFavourite) => [...prevFavourite, id]);
    addFavourite(id); // Call the addFavourite function passed as a prop
  }

  return (
    <div className="pokemon-viewer-container">
      <div className="card">
        {Object.keys(pokemon).length > 0 ? (
          <div id={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.images.small} alt="pokemoncard" />
            <p>{pokemon.types.map((type) => type.name).join(", ")}</p>
            <p>{pokemon.supertype}</p>
            <p>{pokemon.subtypes}</p>
            <p>{pokemon.rarity}</p>
            <h2>{pokemon.artist}</h2>
          </div>
        ) : (
          <img src="/pokemon loader.gif" alt="" />
        )}
      </div>
      <div>
        <h1>Favorites</h1>
        <div className="favoritesContainer">
          {favourite.map((favId) => (
            <img
              key={favId}
              src={`https://api.pokemontcg.io/v2/cards?id=${favId}`}
              alt={`Pokemon ${favId}`}
              className="miniImage"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonViewer;

//const [pokemon, setPokemon] = useState(null);
//TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
// TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
// HINT: you will need useState and useEffect!
