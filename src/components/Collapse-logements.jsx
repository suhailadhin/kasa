import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const CollapseLogements = () => {
    const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
    const [isEquipmentsVisible, setEquipmentsVisibility] = useState(false);

    const toggleDescriptionVisibility = () => {
        setDescriptionVisibility(!isDescriptionVisible);
    };

    const toggleEquipmentsVisibility = () => {
        setEquipmentsVisibility(!isEquipmentsVisible);
    };

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
                        <p className='list'>Your description content goes here.</p>
                    )}
                </div>

                <div className="sectionlogements">
                    <ul>
                        <li>Équipements</li>
                        <div onClick={toggleEquipmentsVisibility}>
                            <FontAwesomeIcon icon={isEquipmentsVisible ? faAngleDown : faAngleUp } />
                        </div>
                    </ul>
                    {isEquipmentsVisible && (
                        <p className='list'>bbb</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default  CollapseLogements;