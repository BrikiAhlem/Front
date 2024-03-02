import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/profil">Profil</Link>
      <Link to="/">Accueil</Link>
      <Link to="/profil">Profil</Link>
      <Link to="/">Accueil</Link>
      <Link to="/profil">Profil</Link>
    </nav>
  );
};

export default NavBar;
