import React from 'react';

const Banner = ({ image, title }) => (
  <div className='banner'>
      <img src={image} alt='banner-image' className='banner-image' />
      {title && <h2>{title}</h2>}
      
  </div>
);

export default Banner;