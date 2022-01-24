import React from "react";
import { NavLink } from "react-router-dom";

import { header } from "./styles";

import pokemonLogo from "../../assets/images/pokemon-logo.png";

const Dashboard = () => {
  return (
    <header className={header}>
      <nav className={navbar}>
        <img src={pokemonLogo} alt="pokemonLogo" />

        <div>
          <ul className={menu}>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/pokemon">
              <li>Pokemon</li>
            </NavLink>
            <NavLink to="/my-pokemon">
              <li>My Pokemon</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Dashboard;

const navbar = header + "--navbar";
const menu = header + "--menu";
