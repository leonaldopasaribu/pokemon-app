import styled from "@emotion/styled";

import font from "../../assets/fonts/BarcadeBrawl.ttf";

export const Container = styled.div({
  padding: "30px 5%",
});

export const MyPokemonButton = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  width: 300px;
  padding: 10px 30px;
  box-shadow: 2px 1px 30px #00000029;
  color: #000;
  background: linear-gradient(yellow, #ffd61f);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
    opacity: 0.9;
  }
`;

export const MyPokemonTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  font-family: barcadebrawl;
  @font-face {
    font-family: barcadebrawl;
    src: url(${font}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const MyPokemonImg = styled.img({
  width: "50px",
  height: "50px",
  marginLeft: "10px",
});

export const Pokemons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
