import {
  ACTION_POKEMONS_REQUEST,
  ACTION_POKEMONS_ERROR,
  GET_POKEMON_SUCCESS,
  GET_POKEMONS_SUCCESS,
  APPEND_POKEMONS_SUCCESS,
  ADD_MY_POKEMON_SUCCESS,
  DELETE_MY_POKEMON_SUCCESS,
  EDIT_MY_POKEMON_SUCCESS,
} from '../../actionTypes';

const initialState = {
  data: {},
  pokemonData: {},
  myPokemon: [],
  isLoading: false,
  errorMessage: '',
  message: '',
  isError: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_POKEMONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        isError: false,
        message: '',
      };

    case ACTION_POKEMONS_ERROR:
      return {
        ...state,
        isLoading: true,
        errorMessage: action.payload,
        isError: true,
      };

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        isError: false,
        data: action.payload,
        message: 'Get Pokemons Data Success',
      };

    case APPEND_POKEMONS_SUCCESS:
      const existingResults = state.data.pokemons?.results || [];
      const newResults = action.payload.pokemons?.results || [];
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        isError: false,
        data: {
          ...action.payload,
          pokemons: {
            ...action.payload.pokemons,
            results: [...existingResults, ...newResults],
          },
        },
        message: 'Append Pokemons Data Success',
      };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        isError: false,
        pokemonData: action.payload,
        message: 'Get Pokemon Data Success',
      };

    case ADD_MY_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        isError: false,
        myPokemon: [...state.myPokemon, action.payload],
        message: 'Add Pokemon Success',
      };

    case DELETE_MY_POKEMON_SUCCESS:
      const id = action.payload;
      return {
        ...state,
        isError: false,
        isLoading: false,
        myPokemon: state.myPokemon.filter(data => data.id !== id),
        message: 'Delete Pokemon Success',
      };

    case EDIT_MY_POKEMON_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        myPokemon: state.myPokemon.map(data =>
          data.id === action.payload.id
            ? { ...data, name: action.payload.name }
            : data
        ),
        message: 'Edit Pokemon Success',
      };

    default:
      return state;
  }
};

export default pokemonReducer;
