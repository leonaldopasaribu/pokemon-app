import React from "react";
import { Link } from "react-router-dom";

import { header } from "./styles";

import pokemonLogo from "../../assets/images/pokemon-logo.png";

const Dashboard = () => {
  return (
    <header className={header}>
      <nav className={navbar}>
        <img src={pokemonLogo} alt="pokemonLogo" />

        <div>
          <ul className={menu}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/pokemon">
              <li>Pokemon</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Dashboard;

const navbar = header + "--navbar";
const menu = header + "--menu";
