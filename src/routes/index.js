import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import PokemonDetail from "../pages/PokemonDetail";
import MyPokemon from "../pages/MyPokemon";

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/pokemon/" element={<PokemonDetail />} />
    <Route path="/my-pokemon/" element={<MyPokemon />} />
  </Routes>
);

export default AllRoutes;
