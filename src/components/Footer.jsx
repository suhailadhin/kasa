import React from 'react';
import logoKasaFooter from '../assets/image/kasa-logo-footer.png';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logoKasaFooter} alt="logo-header" className="kasa-image1" />
      <h1>© 2020 Kasa. All rights reserved</h1>
    </div>
  );
};

export default Footer;