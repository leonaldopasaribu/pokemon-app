import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useQuery } from '@apollo/client/react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import PokemonList from '../../components/PokemonList';
import Loader from '../../components/Global/Loader';

import { GET_POKEMONS } from '../../apollo/queries/pokemons';

import {
  getPokemons,
  appendPokemons,
} from '../../redux/store/actions/pokemonAction';

import { Container, Details, Title, Description, LoadingContainer } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(16);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const isInitialLoad = useRef(true);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
    notifyOnNetworkStatusChange: true,
  });

  // Intersection Observer callback for infinite scroll
  const lastPokemonElementRef = useCallback(
    node => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setOffset(prevOffset => prevOffset + limit);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore, limit]
  );

  useEffect(() => {
    if (loading) return;
    if (error) {
      console.error(`Error! ${error.message}`);
      return;
    }

    if (data) {
      const totalCount = data.pokemons.count;
      const currentCount = offset + data.pokemons.results.length;

      // Check if there are more pokemon to load
      setHasMore(currentCount < totalCount);

      // Initial load - use getPokemons to replace data
      if (isInitialLoad.current) {
        dispatch(getPokemons(data));
        isInitialLoad.current = false;
      } else {
        // Subsequent loads - use appendPokemons to add data
        dispatch(appendPokemons(data));
      }
    }
  }, [loading, error, data, dispatch, offset]);

  // Attach observer to the last pokemon card
  useEffect(() => {
    const pokemonCards = document.querySelectorAll('[data-pokemon-card]');
    const lastCard = pokemonCards[pokemonCards.length - 1];
    
    if (lastCard) {
      lastPokemonElementRef(lastCard);
    }
  }, [pokemon.data, lastPokemonElementRef]);

  return (
    <>
      <Header />
      <Container>
        <Details>
          <Title>List Pokemon</Title>
          <Description>
            List all pokemon check their details or catch them
          </Description>
        </Details>

        <PokemonList type={'pokemons'} />
        
        {loading && (
          <LoadingContainer>
            <Loader />
          </LoadingContainer>
        )}
        
        {!hasMore && !loading && (
          <LoadingContainer>
            <p>You've caught them all! 🎉</p>
          </LoadingContainer>
        )}
      </Container>
    </>
  );
}
