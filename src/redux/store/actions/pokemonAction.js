import {
  ACTION_POKEMONS_REQUEST,
  ACTION_POKEMONS_ERROR,
  GET_POKEMON_SUCCESS,
  GET_POKEMONS_SUCCESS,
  ADD_MY_POKEMON_SUCCESS,
  EDIT_MY_POKEMON_SUCCESS,
  DELETE_MY_POKEMON_SUCCESS,
} from "../../actionTypes";

export const getPokemons = (data) => (dispatch) => {
  dispatch({ type: ACTION_POKEMONS_REQUEST });

  try {
    dispatch({ type: GET_POKEMONS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ACTION_POKEMONS_ERROR, payload: e });
    console.log(e);
  }
};

export const getPokemon = (data) => (dispatch) => {
  dispatch({ type: ACTION_POKEMONS_REQUEST });

  try {
    dispatch({ type: GET_POKEMON_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ACTION_POKEMONS_ERROR, payload: e });
    console.log(e);
  }
};

export const addMyPokemon = (data) => (dispatch) => {
  dispatch({ type: ACTION_POKEMONS_REQUEST });

  try {
    dispatch({ type: ADD_MY_POKEMON_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ACTION_POKEMONS_ERROR, payload: e });
    console.log(e);
  }
};

export const deletePokemon = (id) => (dispatch) => {
  dispatch({ type: ACTION_POKEMONS_REQUEST });

  try {
    dispatch({ type: DELETE_MY_POKEMON_SUCCESS, payload: id });
  } catch (e) {
    dispatch({ type: ACTION_POKEMONS_ERROR, payload: e });
    console.log(e);
  }
};

export const editPokemon = (data) => (dispatch) => {
  dispatch({ type: ACTION_POKEMONS_REQUEST });

  try {
    dispatch({ type: EDIT_MY_POKEMON_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ACTION_POKEMONS_ERROR, payload: e });
    console.log(e);
  }
};
