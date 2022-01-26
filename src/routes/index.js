import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Pokemon from "../pages/Pokemon";
import PokemonDetail from "../pages/PokemonDetail";
import MyPokemon from "../pages/MyPokemon";

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/pokemon/" element={<Pokemon />} />
    <Route path="/pokemon-detail/:pokemonName" element={<PokemonDetail />} />
    <Route path="/my-pokemon/" element={<MyPokemon />} />
  </Routes>
);

export default AllRoutes;
