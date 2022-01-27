import React, { useContext } from "react";
import { usePalette } from "react-palette";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppContext } from "../../../context/AppContext";

import { deletePokemon } from "../../../redux/store/actions/pokemonAction";

import { Card, CardNumber, CardImage, CardName, CardButton } from "./styles";

const CardPokemon = ({ data, type }) => {
  const dispatch = useDispatch();
  const { idFormatter } = useContext(AppContext);
  const { data: color } = usePalette(data.image);
  const { data: color2 } = usePalette(
    data.sprites === undefined ? "" : data.sprites.front_default
  );

  const deleteHandler = () => {
    dispatch(deletePokemon(data.id));
  };

  return (
    <>
      {type === "my-pokemon" ? (
        <Card background={color2.lightVibrant} type={type}>
          <CardNumber>
            <p>#{idFormatter(data.id)}</p>
          </CardNumber>
          <div>
            <CardImage
              src={data.sprites === undefined ? "" : data.sprites.front_default}
              alt="pokemonImage"
            />
          </div>
          <CardName>
            <p>{data.name}</p>
          </CardName>

          <CardButton onClick={() => deleteHandler()}>Release</CardButton>
        </Card>
      ) : (
        <NavLink to={`/pokemon-detail/${data.name}`}>
          <Card background={color.lightVibrant}>
            <CardNumber>
              <p>#{idFormatter(data.id)}</p>
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
