import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
} from "../../actionTypes";

export const getPokemons = (data) => (dispatch) => {
  dispatch({ type: GET_POKEMON_REQUEST });

  try {
    dispatch({ type: GET_POKEMON_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POKEMON_ERROR });
    console.log(e);
  }
};
