import React from "react";
import { usePalette } from "react-palette";
import { NavLink } from "react-router-dom";

import { Card, CardNumber, CardImage, CardName, CardButton } from "./styles";

const CardPokemon = ({ data, type }) => {
  const { data: color } = usePalette(data.image);

  return (
    <>
      {type === "my-pokemon" ? (
        <Card background={color.lightVibrant} type={type}>
          <CardNumber>
            <p>#{String(data.id).padStart(3, "0")}</p>
          </CardNumber>
          <div>
            <CardImage src={data.image} alt="pokemonImage" />
          </div>
          <CardName>
            <p>{data.name}</p>
          </CardName>

          <CardButton>Release</CardButton>
        </Card>
      ) : (
        <NavLink to={`/pokemon-detail/${data.name}`}>
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
        </NavLink>
      )}
    </>
  );
};

export default CardPokemon;
