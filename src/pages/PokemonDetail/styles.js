import styled from "@emotion/styled";

import font from "../../assets/fonts/BarcadeBrawl.ttf";

export const Container = styled.div({
  position: "relative",
  marginBottom: "30px",
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

export const TitleWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
});

export const Title = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: barcadebrawl;
  color: #000;
  @font-face {
    font-family: barcadebrawl;
    src: url(${font}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  } ;
`;

export const FormEdit = styled.form({
  display: "flex",
  alignItems: "center",
});

export const EditIcon = styled.img({
  width: "20px",
  height: "20px",
});

export const InputPokemonName = styled.input({
  background: "#fff",
  border: "none",
  borderBottom: "2px solid #fff",
  borderRadius: "4px",
  height: "29px",
  padding: "0 5px",
  fontSize: "16px",
  fontFamily: "Mulish",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
});

export const ButtonEdit = styled.button({
  padding: "0 15px",
  height: "29px",
  border: "none",
  borderRadius: "4px",
  background: "#14fc33",
  color: "#fff",
  fontSize: "16px",
  fontFamily: "Mulish",
  fontWeight: "bold",
  marginLeft: "10px",
});

export const ImagePokemon = styled.img`
  width: 150px;
  height: auto;

  @media only screen and (max-width: 600px) {
    width: 120px;
  }
`;

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

export const PokemonTypeWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "capitalize",
  gap: "10px",
});

export const PokemonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media only screen and (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

export const PokemonIcon = styled.img`
  width: 25px;
  height: 25px;

  @media only screen and (max-width: 600px) {
    width: 15px;
    height: 15px;
  }
`;

export const PokemonTypeName = styled.p`
  font-family: Mulish;
  font-weight: 300;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

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

export const PowerPokemonTitle = styled.h1`
  font-size: 28px;
  font-style: italic;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Abilities = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 200px auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    margin-bottom: 10px;
  }
`;

export const ListAbilities = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 1px 30px #00000029;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  text-transform: capitalize;
  font-family: Mulish;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 15px;
  }
`;

export const Moves = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 200px auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const ListMoves = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 1px 30px #00000029;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  text-transform: capitalize;
  font-family: Mulish;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 15px;
  }
`;

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
