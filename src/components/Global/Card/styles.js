import styled from "@emotion/styled";

import font from "../../../assets/fonts/BarcadeBrawl.ttf";

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
      ? `radial-gradient(circle, #eee, ${props.background})`
      : "#ff5"};
  box-shadow: 0 1.6px 1.6px rgba(0, 0, 0, 0.023),
    0 3.8px 3.8px rgba(0, 0, 0, 0.034), 0 6.9px 6.9px rgba(0, 0, 0, 0.041),
    0 11.4px 11.4px rgba(0, 0, 0, 0.049), 0 18.8px 18.8px rgba(0, 0, 0, 0.056),
    0 32.8px 32.8px rgba(0, 0, 0, 0.067), 0 71px 71px rgba(0, 0, 0, 0.09);

  &:hover {
    cursor: ${(props) => (props.type === "my-pokemon" ? "normal" : "pointer")};
    transform: ${(props) =>
      props.type === "my-pokemon" ? " none" : "scale(1.1)"};
    transition: ${(props) => (props.type === "my-pokemon" ? "0s" : "0.3s")};
  }

  @media only screen and (max-width: 600px) {
    min-width: 100px;
    padding: 1.2rem 0;
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

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CardImage = styled.img`
  width: 150px;
  height: auto;

  @media only screen and (max-width: 600px) {
    width: 100px;
  }
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

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CardButton = styled.button`
  margin-top: 20px;
  font-family: Mulish;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  background: #000;
  color: #fff;
  padding: 15px;
  box-shadow: 2px 1px 30px #00000029;

  @media only screen and (max-width: 600px) {
    padding: 15px;
    font-size: 12px;
  }
`;
