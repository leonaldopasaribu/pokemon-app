import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
} from "../../actionTypes";

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: null,
  message: "",
  isError: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        isError: false,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        isError: false,
        data: action.payload,
      };
    case GET_POKEMON_ERROR:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        isError: false,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
