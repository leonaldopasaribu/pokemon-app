import React from "react";

import { Header, PokemonLogo } from "./styles";

import pokemonLogo from "../../assets/images/pokemon-logo.png";

const Dashboard = () => {
  return (
    <Header>
      <PokemonLogo src={pokemonLogo} alt="pokemonLogo" />
    </Header>
  );
};

export default Dashboard;
