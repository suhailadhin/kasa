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

  const sections = [
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
    <div className='collapse'>
      {sections.map(section => (
        <div key={section.key}>
          <ul>
            {section.title}
            <li>
              <div onClick={() => toggleVisibility(section.key)}>
                <FontAwesomeIcon 
                  icon={isVisible[section.key] ? faAngleUp : faAngleDown} 
                  className={isVisible[section.key] ? 'rotate-up' : 'rotate-down'} 
                />
              </div>
            </li>
          </ul>
          {isVisible[section.key] && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Collapse;
