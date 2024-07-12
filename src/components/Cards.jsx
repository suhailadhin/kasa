import React from "react";

const Card = ({ image, title }) => {
    return (
        <div className="card">
            <img src={image} alt={title}
             />
            <h2>{title}</h2>
        </div>
    );
};


export default Card;