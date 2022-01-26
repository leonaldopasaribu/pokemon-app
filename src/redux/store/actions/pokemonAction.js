import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
} from "../../actionTypes";

export const getPokemons = (data) => (dispatch) => {
  dispatch({ type: GET_POKEMONS_REQUEST });

  try {
    dispatch({ type: GET_POKEMONS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POKEMONS_ERROR });
    console.log(e);
  }
};

export const getPokemon = (data) => (dispatch) => {
  dispatch({ type: GET_POKEMON_REQUEST });

  try {
    dispatch({ type: GET_POKEMON_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POKEMON_ERROR });
    console.log(e);
  }
};
