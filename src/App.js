import React from "react";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import configureStore from "./redux/store";

import AllRoutes from "./routes";

import { AppProvider } from "./context/AppContext";

import GlobalStyles from "./styles/";

const { store, persistor } = configureStore();

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProvider>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <div className="App">
                <AllRoutes />
                <GlobalStyles />
                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  closeButton={false}
                  theme="colored"
                />
              </div>
            </BrowserRouter>
          </ApolloProvider>
        </AppProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
