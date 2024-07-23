import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = () => {
  const [isVisible, setIsVisible] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false
  });

  const articles = [
    {
      key: 'fiabilite',
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    },
    {
      key: 'respect',
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'
    },
    {
      key: 'service',
      title: 'Service',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'
    },
    {
      key: 'securite',
      title: 'Sécurité',
      content: 'La Sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de Sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
  ];

  const toggleVisibility = (key) => {
    setIsVisible(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  useEffect(() => {
    console.log("Component mounted or visibility changed");
  }, [isVisible]);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div className='collapse abouts'>
      {articles.map(article => (
        <div key={article.key} className='section__abouts'>
          <div 
            className='section__pannel' 
            onClick={() => toggleVisibility(article.key)}
            aria-expanded={isVisible[article.key]}
          >
            <span>{article.title}</span>
            <FontAwesomeIcon 
              icon={isVisible[article.key] ?faAngleDown  :faAngleUp } 
              className={isVisible[article.key] ?  'rotate-up': 'rotate-down'} 
            />
          </div>
          
          <div className={`section-content ${isVisible[article.key] ?  'translate-down' : 'translate-up'}`}>
            {isVisible[article.key] && <p>{article.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Collapse;



