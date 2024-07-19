import React, { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import CollapseLogements from '../components/Collapse-logements';
import RatingStars from '../components/RatingStars';
import TagList from '../components/Tags';

const FicheLogements = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/data.json`)
      .then(response => response.json())
      .then(logements => {
        const selectedLogement = logements.find(logement => logement.id === id);
        if (selectedLogement === undefined) {
          navigate("/404");
        }
        setLogement(selectedLogement);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id, navigate]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main-container'>     
        <Carrousel slides={logement.pictures} />

      <div className="content">
        <div className='bloc-information'>
          <div className='title-logement'>{logement.title}</div>
          <p className='localisation-title'>{logement.location}</p>
          <TagList tags={logement.tags} />
        </div>
        
        <div className="host-info">
          <div className='figcaption'>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div> 
          <RatingStars rating={logement.rating} /> 
        </div>
        
      </div>

      <CollapseLogements logement={logement} />
    </div>
  );
};

export default FicheLogements;