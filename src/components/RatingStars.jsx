import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function RatingStars({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color="$qater-color" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#e4e5e9" />);
      }
    }
    return (
      <div className="rating">
        {stars} 
      </div>
    );
  };

  export default RatingStars;