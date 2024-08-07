import React from 'react';
import Banner from "../components/Banner";
import bannerImageAbout from "../assets/image/image-banner-abouts.png";
import {Collapse} from '../components/Collapse';


const Abouts = () => {
  
  return (
    <div className='main-container'>
    <Banner image={bannerImageAbout} />
    <Collapse />
  </div>
  );
};

export default Abouts;