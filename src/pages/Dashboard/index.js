import React from "react";

import Header from "../../components/Header";
import PokemonList from "../../components/PokemonList";

import pokemonBall from "../../assets/images/pokeball.png";

import {
  Container,
  MyPokemonButton,
  MyPokemonTitle,
  MyPokemonImg,
  Pokemons,
} from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <MyPokemonButton>
        <MyPokemonTitle>My Pokemon</MyPokemonTitle>
        <MyPokemonImg src={pokemonBall} alt="pokemonBall" />
      </MyPokemonButton>

      <Pokemons>
        <PokemonList />
        <PokemonList />
        <PokemonList />
        <PokemonList />
        <PokemonList />
      </Pokemons>
    </Container>
  );
}
