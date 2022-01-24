import styled from "@emotion/styled";

import font from "../../assets/fonts/BarcadeBrawl.ttf";

export const Container = styled.div({
  padding: "30px 5% 120px 5%",
});

export const Details = styled.div({
  width: "450px",
  paddingBottom: "20px",
});

export const Title = styled.h1({
  fontSize: "36px",
  textTransform: "uppercase",
  fontWeight: "800",
  color:'#14fc33'
});

export const Description = styled.p({
  fontFamily: "Mulish",
  fontSize: "18px",
  fontWeight: "300",
  paddingTop:'10px'
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

export const Pagination = styled.div({
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
});
