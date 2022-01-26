import styled from "@emotion/styled";

import font from "../../assets/fonts/BarcadeBrawl.ttf";

export const Container = styled.div({
  position: "relative",
  marginBottom: "100px",
});

export const DetailsPokemon = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#ff0",
  borderToLeftRadius: "0px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "100%",
  borderBottomLeftRadius: "100%",
  paddingBottom: "20px",
});

export const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: barcadebrawl;
  @font-face {
    font-family: barcadebrawl;
    src: url(${font}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  color: #000'
`;

export const ImagePokemon = styled.img({
  width: "150px",
  height: "auto",
});

export const Physique = styled.div({
  display: "flex",
  gap: "20px",
});

export const Height = styled.p({
  fontSize: "16px",
  fontFamily: "Mulish",
  fontWeight: "600",
  fontStyle: "italic",
});

export const Weight = styled.p({
  fontSize: "16px",
  fontFamily: "Mulish",
  fontWeight: "600",
  fontStyle: "italic",
});

export const Types = styled.div({
  display: "flex",
  gap: "20px",
  marginTop: "20px",
});

const water = "#539DDF";

export const PokemonTypeWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "capitalize",
  gap: "10px",
});

export const PokemonIconWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: `0 0 20px ${water}`,
  width: "50px",
  height: "50px",
  borderRadius: "50%",
});

export const PokemonIcon = styled.img({
  width: "25px",
  height: "25px",
});

export const PokemonTypeName = styled.p({
  fontFamily: "Mulish",
  fontWeight: "300",
});

export const PowerPokemon = styled.div({
  marginTop: "30px",
  padding: "0 5%",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  justifyItems: "center",
  gap: "20px",
});

export const PowerPokemonTitle = styled.h1({
  fontSize: "28px",
  fontStyle: "italic",
});

export const Abilities = styled.div({
  width: "100%",
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "200px auto",
});

export const ListAbilities = styled.div({
  width: "100%",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "2px 1px 30px #00000029",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "20px",
  textTransform: "capitalize",
  fontFamily: "Mulish",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "28px;",
});

export const Moves = styled.div({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "200px auto",
  marginTop: "20px",
});

export const ListMoves = styled.div({
  width: "100%",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "2px 1px 30px #00000029",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "20px",
  textTransform: "capitalize",
  fontFamily: "Mulish",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "28px;",
});

export const ButtonCatch = styled.button`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
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
  border: none;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    filter: grayscale(15%);
    transform: scale(1.1);
    transform: translate(-50%, -40%);
  }
`;

export const ButtonCatchTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-family: barcadebrawl;
  @font-face {
    font-family: barcadebrawl;
    src: url(${font}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const ButtonCatchImg = styled.img({
  width: "40px",
  height: "40px",
  marginLeft: "10px",
});

export const ButtonCatchDisabled = styled.button`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
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
  filter: grayscale(100%);
  border: none;

  &:hover {
    cursor: not-allowed;
    filter: grayscale(100%);
    transition: 0.3s;
    transform: translate(-50%, -50%);
  }
`;
