import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import PokemonList from "../../components/PokemonList";

import { GET_POKEMONS } from "../../apollo/queries/pokemons";

import { getPokemons } from "../../redux/store/actions/pokemonAction";

import pokemonBall from "../../assets/images/pokeball.png";

import { Container, Details, Title, Description, Pagination } from "./styles";

import Buttons from "../../components/Global/Buttons/";

export default function Dashboard() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(12);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });

  const count = pokemon.data.pokemons.count;

  useEffect(() => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    if (data) {
      dispatch(getPokemons(data));
    }
  }, [loading, error, data, dispatch]);

  return (
    <>
      <Header />
      <Container>
        {/* <MyPokemonButton>
            <MyPokemonTitle>My Pokemon</MyPokemonTitle>
            <MyPokemonImg src={pokemonBall} alt="pokemonBall" />
          </MyPokemonButton> */}
        <Details>
          <Title>List Pokemon</Title>
          <Description>
            List all pokemon check their details or catch them
          </Description>
        </Details>

        <PokemonList type={"pokemons"} />
        <Pagination>
          <Buttons
            title={pokemon.isLoading === true ? "loading...." : "Previous"}
            onClick={() => setOffset(offset - limit)}
            disabled={offset === 0 ? true : false}
          />
          <Buttons
            title={pokemon.isLoading === true ? "loading...." : "Next"}
            onClick={() => setOffset(offset + limit)}
            disabled={offset > count - limit ? true : false}
          />
        </Pagination>
      </Container>
    </>
  );
}
