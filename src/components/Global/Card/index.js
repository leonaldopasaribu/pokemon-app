import React from "react";
import { usePalette } from "react-palette";

import { Card, CardNumber, CardImage, CardName } from "../styles";

const CardPokemon = ({ data }) => {
  const { data: color } = usePalette(data.image);

  return (
    <>
      <Card background={color.lightVibrant}>
        <CardNumber>
          <p>#{String(data.id).padStart(3, "0")}</p>
        </CardNumber>
        <div>
          <CardImage src={data.image} alt="pokemonImage" />
        </div>
        <CardName>
          <p>{data.name}</p>
        </CardName>
      </Card>
    </>
  );
};

export default CardPokemon;
