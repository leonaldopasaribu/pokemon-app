import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Header from "../../components/Header";

import { GET_POKEMON } from "../../apollo/queries/pokemons";

import {
  getPokemon,
  addMyPokemon,
} from "../../redux/store/actions/pokemonAction";

import pokemonBall from "../../assets/images/pokeball.png";

import {
  Container,
  DetailsPokemon,
  Title,
  ImagePokemon,
  Physique,
  Height,
  Weight,
  Types,
  PokemonTypeWrapper,
  PokemonIconWrapper,
  PokemonIcon,
  PokemonTypeName,
  PowerPokemon,
  PowerPokemonTitle,
  Abilities,
  ListAbilities,
  Moves,
  ListMoves,
  ButtonCatch,
  ButtonCatchTitle,
  ButtonCatchImg,
  ButtonCatchDisabled,
} from "./styles";

export default function PokemonDetail() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const [isDisabled, setIsDisabled] = useState(true);
  const { pokemonName } = useParams();

  const pokemonData = pokemon.pokemonData.hasOwnProperty("pokemon")
    ? pokemon.pokemonData.pokemon
    : {};

  const { data } = useQuery(GET_POKEMON, {
    variables: { name: pokemonName },
  });

  // console.log(data);

  useEffect(() => {
    if (pokemon.myPokemon.some((item) => item.name === pokemonName)) {
      setIsDisabled(false);
    }
  }, [pokemon.myPokemon, pokemonName]);

  useEffect(() => {
    if (data) {
      dispatch(getPokemon(data));
    }
  }, [data, dispatch]);

  const color = {
    grass: "#5FBD58",
    bug: "#92BC2C",
    dark: "#595761",
    dragon: "#0C69C8",
    electric: "#F2D94E",
    fairy: "#EE90E6",
    fighting: "#D3425F",
    fire: "#dc872f",
    flying: "#A1BBEC",
    ghost: "#5F6DBC",
    ground: "#DA7C4D",
    ice: "#75D0C1",
    normal: "#A0A29F",
    poison: "#B763CF",
    psychic: "#ff2ca8",
    rock: "#a38c21",
    steel: "#5695A3",
    water: "#539DDF",
  };

  const catchHandler = () => {
    if (Math.random() < 0.5) {
      toast.warning("Try Again! You Almost Got It");
    } else {
      toast.success("Success! You got it");
      dispatch(addMyPokemon(pokemonData));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <DetailsPokemon>
          <Title>{pokemonName}</Title>

          {pokemon.isLoading ? (
            "Loading..."
          ) : (
            <ImagePokemon
              src={
                pokemonData.hasOwnProperty("sprites")
                  ? pokemonData.sprites.front_default
                  : ""
              }
              alt="pokemonImage"
            />
          )}
          <Physique>
            <Height>Height: {pokemonData.height} m</Height>
            <Weight>Weight: {pokemonData.weight} kg</Weight>
          </Physique>
          <Types>
            {pokemonData.hasOwnProperty("types")
              ? pokemonData.types.map((data, i) => {
                  const colorType = data.type.name;
                  const colorFinal = color[colorType];
                  return (
                    <PokemonTypeWrapper key={i}>
                      <PokemonIconWrapper
                        key={i}
                        style={{
                          background: colorFinal,
                          boxShadow: `0 0 20px ${colorFinal}`,
                        }}
                      >
                        <PokemonIcon
                          key={i}
                          src={require("../../assets/icons/" +
                            data.type.name +
                            ".png")}
                          alt="pokemonIcons"
                        />
                      </PokemonIconWrapper>
                      <PokemonTypeName>{data.type.name}</PokemonTypeName>
                    </PokemonTypeWrapper>
                  );
                })
              : ""}
          </Types>
        </DetailsPokemon>

        <PowerPokemon>
          <Abilities>
            <PowerPokemonTitle>Abilities</PowerPokemonTitle>
            <ListAbilities>
              {pokemonData.hasOwnProperty("abilities")
                ? pokemonData.abilities.map((data, i) => (
                    <div key={i}>{data.ability.name}</div>
                  ))
                : ""}
            </ListAbilities>
          </Abilities>
          <Moves>
            <PowerPokemonTitle>Moves</PowerPokemonTitle>
            <ListMoves>
              {pokemonData.hasOwnProperty("moves")
                ? pokemonData.moves.map((data, i) => (
                    <div key={i}>{data.move.name}</div>
                  ))
                : ""}
            </ListMoves>
          </Moves>
        </PowerPokemon>

        {isDisabled ? (
          <ButtonCatch onClick={() => catchHandler()}>
            <ButtonCatchTitle>Catch Pokemon</ButtonCatchTitle>
            <ButtonCatchImg src={pokemonBall} alt="pokemonBall" />
          </ButtonCatch>
        ) : (
          <ButtonCatchDisabled onClick={() => catchHandler()} disabled>
            <ButtonCatchTitle>Catch Pokemon</ButtonCatchTitle>
            <ButtonCatchImg src={pokemonBall} alt="pokemonBall" />
          </ButtonCatchDisabled>
        )}
      </Container>
    </>
  );
}
