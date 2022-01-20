import React from "react";

import { Card, CardNumber, CardImage, CardName } from "./styles";

import bulbasaur from "../../assets/images/bulbasaur.png";

const PokemonList = () => {
  return (
    <Card>
      <CardNumber>
        <p>#001</p>
      </CardNumber>
      <div>
        <CardImage src={bulbasaur} alt="" />
      </div>
      <CardName>
        <p>Bulbasaur</p>
      </CardName>
    </Card>
  );
};

export default PokemonList;
