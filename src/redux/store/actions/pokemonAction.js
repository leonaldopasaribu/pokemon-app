import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  ADD_MY_POKEMON_REQUEST,
  ADD_MY_POKEMON_SUCCESS,
  ADD_MY_POKEMON_ERROR
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

export const addMyPokemon = (data) => (dispatch) => {
  dispatch({ type: ADD_MY_POKEMON_REQUEST });

  try {
    dispatch({ type: ADD_MY_POKEMON_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ADD_MY_POKEMON_ERROR });
    console.log(e);
  }
};
