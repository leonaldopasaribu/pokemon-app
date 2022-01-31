import React from "react";
import { NavLink } from "react-router-dom";

import Header from "../../components/Header";

import {
  WrapperDashboard,
  Container,
  Title,
  TitleBold,
  Description,
  Button,
  ImagePikachu,
  ImagePokeBall,
  Left,
  Right,
  ImageWrapper
} from "./styles";

import pikachu from "../../assets/images/pikachu.png";
import pokeball from "../../assets/images/pokeball-big.png";

export default function Dashboard() {
  return (
    <>
      <Header />
      <WrapperDashboard>
        <Container>
          <Left>
            <TitleBold>Find all your</TitleBold>
            <Title> Favorite </Title>
            <TitleBold>Pokemon</TitleBold>

            <Description>
              You can know the type of Pokemon, its abilities and strength
            </Description>
            <NavLink to="/pokemon">
              <Button>See Pokemons</Button>
            </NavLink>
          </Left>
          <Right>
            <ImageWrapper>
              <ImagePikachu src={pikachu} alt="pikachuImages" />
              <ImagePokeBall src={pokeball} alt="pikachuImages" width={100} />
            </ImageWrapper>
          </Right>
        </Container>
      </WrapperDashboard>
    </>
  );
}
