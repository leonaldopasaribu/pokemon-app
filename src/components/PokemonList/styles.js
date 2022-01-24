import styled from "@emotion/styled";

import font from "../../assets/fonts/BarcadeBrawl.ttf";

export const Pokemons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
  gap: 40px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-radius: 1rem;
  min-width: 220px;
  height: auto;
  text-align: center;
  background: ${(props) =>
    props.background
      ? `linear-gradient(to bottom right ,${props.background},  #ff9)`
      : "#ff5"};
  box-shadow: 0 1.6px 1.6px rgba(0, 0, 0, 0.023),
    0 3.8px 3.8px rgba(0, 0, 0, 0.034), 0 6.9px 6.9px rgba(0, 0, 0, 0.041),
    0 11.4px 11.4px rgba(0, 0, 0, 0.049), 0 18.8px 18.8px rgba(0, 0, 0, 0.056),
    0 32.8px 32.8px rgba(0, 0, 0, 0.067), 0 71px 71px rgba(0, 0, 0, 0.09);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
export const CardNumber = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: barcadebrawl;
  @font-face {
    font-family: barcadebrawl;
    src: url(${font}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const CardImage = styled.img`
  width: 150px;
  height: auto;
`;

export const CardName = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: barcadebrawl;
  @font-face {
    font-family: barcadebrawl;
    src: url(${font}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
