import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import configureStore from './redux/store';

import Dashboard from './pages/Dashboard';
import Pokemon from './pages/Pokemon';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemon from './pages/MyPokemon';

import { AppProvider } from './context/AppContext';

import GlobalStyles from './styles/';

const { store, persistor } = configureStore();

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/pokemon/',
    element: <Pokemon />,
  },
  {
    path: '/pokemon-detail/:pokemonName',
    element: <PokemonDetail />,
  },
  {
    path: '/my-pokemon/',
    element: <MyPokemon />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProvider>
          <ApolloProvider client={client}>
            <div className="App">
              <RouterProvider router={router} />
              <GlobalStyles />
              <ToastContainer
                position="top-center"
                autoClose={3000}
                closeButton={false}
                theme="colored"
              />
            </div>
          </ApolloProvider>
        </AppProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
