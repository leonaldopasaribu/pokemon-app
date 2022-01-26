import React from "react";

import Header from "../../components/Header";
import PokemonList from "../../components/PokemonList";

import { Container, Details, Title, Description } from "./styles";

export default function MyPokemon() {
  return (
    <>
      <Header />
      <Container>
        <Details>
          <Title>My Pokemon</Title>
          <Description>List of pokemon that you already have</Description>
        </Details>
        <PokemonList type={'my-pokemon'}/>
      </Container>
    </>
  );
}
