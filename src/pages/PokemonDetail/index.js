import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { Loader } from "../../components/Global";

import { GET_POKEMON } from "../../apollo/queries/pokemons";

import {
  getPokemon,
  addMyPokemon,
  editPokemon,
} from "../../redux/store/actions/pokemonAction";

import pokemonBall from "../../assets/images/pokeball.png";
import { editIcon, cancelIcon } from "../../assets/icons";

import {
  Container,
  DetailsPokemon,
  TitleWrapper,
  Title,
  FormEdit,
  EditIcon,
  ButtonEdit,
  InputPokemonName,
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
  const { pokemonName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemon = useSelector((state) => state.pokemon);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isShowForm, setShowForm] = useState(false);
  const [newPokemonName, setNewPokemonName] = useState(pokemonName);
  const [isLoading, setIsLoading] = useState(true);

  const pokemonData = pokemon.pokemonData.hasOwnProperty("pokemon")
    ? pokemon.pokemonData.pokemon
    : {};

  const myPokemon = useMemo(() => pokemon.myPokemon, [pokemon.myPokemon]);

  const pokemonId = pokemonData.id;

  const { data } = useQuery(GET_POKEMON, {
    variables: { name: pokemonName },
  });

  // console.log(data);

  useEffect(() => {
    if (myPokemon.some((item) => item.id === pokemonId)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [myPokemon, pokemonId]);

  useEffect(() => {
    if (data) {
      dispatch(getPokemon(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const loading = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loading);
  }, []);

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

  const handleChange = (e) => {
    setNewPokemonName(e.target.value);
  };

  const payload = {
    id: pokemonData.id,
    name: newPokemonName,
  };

  const editPokemonName = () => {
    dispatch(editPokemon(payload));
    navigate(`/my-pokemon`);

    toast.success("Nice, You have successfully changed pokemon name");
  };

  const catchHandler = () => {
    if (Math.random() < 0.5) {
      toast.warning("Try Again! You Almost Got It");
    } else {
      toast.success("Success! You got it");
      dispatch(addMyPokemon(pokemonData));
      console.log(pokemonData);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />
          <Container>
            <DetailsPokemon>
              <TitleWrapper>
                {isShowForm ? (
                  <FormEdit onSubmit={editPokemonName}>
                    <InputPokemonName
                      type="text"
                      name="pokemonName"
                      value={newPokemonName}
                      onChange={handleChange}
                    />
                    <ButtonEdit>Save</ButtonEdit>
                  </FormEdit>
                ) : (
                  <Title>{pokemonName}</Title>
                )}

                {!isDisabled ? (
                  !isShowForm ? (
                    <EditIcon
                      src={editIcon}
                      alt="editIcon"
                      onClick={() => setShowForm(true)}
                    />
                  ) : (
                    <EditIcon
                      src={cancelIcon}
                      alt="cancelIcon"
                      onClick={() => setShowForm(false)}
                    />
                  )
                ) : (
                  ""
                )}
              </TitleWrapper>

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
      )}
    </>
  );
}
