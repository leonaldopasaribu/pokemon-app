import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import pokemonLogo from '../../assets/images/pokemon-logo.png';

import { HeaderWrapper, Nav, PokemonLogo, Menu, MenuItem } from './styles';

const Header = () => {
  const location = useLocation();
  const { pokemonName } = useParams();
  const [isHome, setIsHome] = useState(false);
  const [isPokemon, setIsPokemon] = useState(false);
  const [isMyPokemon, setIsMyPokemon] = useState(false);

  const active = {
    color: '#000',
  };

  const notActive = {
    color: '#ff0',
  };

  const pathName = location.pathname;

  useEffect(() => {
    if (pathName === '/my-pokemon') {
      setIsHome(false);
      setIsPokemon(false);
      setIsMyPokemon(true);
    } else if (
      pathName === '/pokemon' ||
      pathName === `/pokemon-detail/${pokemonName}`
    ) {
      setIsHome(false);
      setIsPokemon(true);
      setIsMyPokemon(false);
    } else {
      setIsHome(true);
      setIsPokemon(false);
      setIsMyPokemon(false);
    }
  }, [pathName, pokemonName]);

  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">
          <PokemonLogo src={pokemonLogo} alt="pokemonLogo" />
        </NavLink>
        <div>
          <Menu>
            <NavLink to="/">
              <MenuItem theme={isHome ? active : notActive}>Home</MenuItem>
            </NavLink>
            <NavLink to="/pokemon">
              <MenuItem theme={isPokemon ? active : notActive}>
                Pokemon
              </MenuItem>
            </NavLink>
            <NavLink to="/my-pokemon">
              <MenuItem theme={isMyPokemon ? active : notActive}>
                My Pokemon
              </MenuItem>
            </NavLink>
          </Menu>
        </div>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
