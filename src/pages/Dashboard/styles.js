import styled from "@emotion/styled";

import font from "../../assets/fonts/BarcadeBrawl.ttf";

export const Container = styled.div({
  marginTop: "20px",
  padding: "0 4%",
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
  color: #fff;
  background: linear-gradient(
    400deg,
    rgba(73, 208, 177, 1) 0%,
    rgba(61, 230, 81, 1) 16%,
    rgba(88, 169, 244, 1) 33%,
    rgba(87, 235, 244, 1) 51%,
    rgba(255, 206, 76, 1) 68%,
    rgba(255, 71, 71, 1) 84%
  );

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
    opacity: 0.8;
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
