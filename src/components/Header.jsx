import React from 'react';
import { Link } from 'react-router-dom'; 
import logoKasa from '../assets/image/Kasa-logo.jpg';

const Header = () => {
  return (
    <div className='header'>
      <img src={logoKasa} alt="logo-header" className="kasa-image" />
      <ul>
      <Link to="/">Accueil</Link>
      <Link to="/abouts">À Propos</Link>
      </ul>
    </div>
  );
};

export default Header;