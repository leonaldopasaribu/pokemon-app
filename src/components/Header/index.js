import React from "react";
import { NavLink } from "react-router-dom";

import pokemonLogo from "../../assets/images/pokemon-logo.png";

import { HeaderWrapper, Nav, PokemonLogo, Menu } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">
          <PokemonLogo src={pokemonLogo} alt="pokemonLogo" />
        </NavLink>
        <div>
          <Menu>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/pokemon">
              <li>Pokemon</li>
            </NavLink>
            <NavLink to="/my-pokemon">
              <li>My Pokemon</li>
            </NavLink>
          </Menu>
        </div>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
