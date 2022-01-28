import React from "react";
import { useSelector } from "react-redux";

import { Container, Pokemons, EmptyMessage } from "./styles";

import CardPokemon from "../Global/Card";

const PokemonList = ({ type }) => {
  const pokemon = useSelector((state) => state.pokemon);
  const pokemons = pokemon.data.hasOwnProperty("pokemons")
    ? pokemon.data.pokemons.results
    : {};
  const myPokemons = pokemon.myPokemon.length > 0 ? pokemon.myPokemon : [];

  return (
    <Container>
      <Pokemons>
        {type === "pokemons"
          ? Array.isArray(pokemons) &&
            pokemons.map((data, i) => <CardPokemon key={i} data={data} />)
          : Array.isArray(myPokemons) &&
            myPokemons.map((data, i) => (
              <CardPokemon type={"my-pokemon"} key={i} data={data} />
            ))}
      </Pokemons>
      {pokemon.myPokemon.length > 0 ? (
        ""
      ) : (
        <EmptyMessage>
          You don't have any Pokemon, Try to catch it.
        </EmptyMessage>
      )}
    </Container>
  );
};

export default PokemonList;
