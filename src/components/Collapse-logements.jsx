import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const CollapseLogements = (props) => {
    const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
    const [isEquipmentsVisible, setEquipmentsVisibility] = useState(false);

    const toggleDescriptionVisibility = () => {
        setDescriptionVisibility(!isDescriptionVisible);
    };

    const toggleEquipmentsVisibility = () => {
        setEquipmentsVisibility(!isEquipmentsVisible);
    };

    const equipments = props.logement.equipments && props.logement.equipments.map((equipement, index) => (
        <li key={index} className='list'>{equipement}</li>
    ));

    return (
        <div className='collapse logements'>
            <div className="sectionlogements">
                <div className="section-title" onClick={toggleDescriptionVisibility}>
                    <span>Description</span>
                    <FontAwesomeIcon 
                        icon={isDescriptionVisible ? faAngleDown : faAngleUp}
                        className={isDescriptionVisible ? 'rotate-down' : 'rotate-up'}
                    />
                </div>
                <div className={`contents ${isDescriptionVisible ? 'translate-down' : 'translate-up'}`}>
                    {isDescriptionVisible && (
                        <p className='list'>{props.logement.description}</p>
                    )}
                </div>
            </div>

            <div className="sectionlogements">
                <div className="section-title" onClick={toggleEquipmentsVisibility}>
                    <span>Équipements</span>
                    <FontAwesomeIcon 
                        icon={isEquipmentsVisible ? faAngleDown : faAngleUp}
                        className={isEquipmentsVisible ? 'rotate-down' : 'rotate-up'}
                    />
                </div>
                <div className={`contents ${isEquipmentsVisible ? 'translate-down' : 'translate-up'}`}>
                    {isEquipmentsVisible && (
                        <ul>
                            {equipments}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CollapseLogements;



