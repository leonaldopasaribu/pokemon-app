import React from "react";
import { useSelector } from "react-redux";

import { Pokemons } from "./styles";

import CardPokemon from "./Card";

const PokemonList = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const pokemons = pokemon.data.pokemons.results;

  return (
    <Pokemons>
      {Array.isArray(pokemons) &&
        pokemons.map((data, i) => <CardPokemon key={i} data={data} />)}
    </Pokemons>
  );
};

export default PokemonList;
