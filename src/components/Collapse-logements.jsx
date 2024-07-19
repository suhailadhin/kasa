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
))
    

    return (
        <div>
            <div className='collapse logements'>
                <div className="sectionlogements">
                    <ul>
                        <li>Description</li>
                        <div onClick={toggleDescriptionVisibility}>
                            <FontAwesomeIcon icon={isDescriptionVisible ? faAngleDown : faAngleUp } />
                        </div>
                    </ul>
                    {isDescriptionVisible && (
                        <p className='list'>{props.logement.description}</p>
                    )}
                </div>

                <div className="sectionlogements">
                    <ul>
                        <li>Équipements</li>
                        <div onClick={toggleEquipmentsVisibility}>
                            <FontAwesomeIcon icon={isEquipmentsVisible ? faAngleDown : faAngleUp } />
                        </div>
                    </ul>
                    {isEquipmentsVisible && (equipments) }
                    
                </div>
            </div>
        </div>
    );
};

export default  CollapseLogements;
