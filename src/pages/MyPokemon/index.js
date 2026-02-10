import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import PokemonList from '../../components/PokemonList';

import { Container, Details, Title, Description, EmptyMessage } from './styles';

export default function MyPokemon() {
  const pokemon = useSelector(state => state.pokemon);

  return (
    <>
      <Header />
      <Container>
        <Details>
          <Title>My Pokemon</Title>
          <Description>List of pokemon that you already have</Description>
        </Details>
        <PokemonList type={'my-pokemon'} />

        {pokemon.myPokemon.length > 0 ? (
          ''
        ) : (
          <EmptyMessage>
            You don't have any Pokemon, Try to catch it.
          </EmptyMessage>
        )}
      </Container>
    </>
  );
}
