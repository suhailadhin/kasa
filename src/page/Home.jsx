import React from 'react';
import Banner from "../components/Banner";
import Card from "../components/Cards"
import bannerImageHome from "../assets/image/image-banner-home.png";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


const Home = () => {
  const [ logements, setLogement] = useState([]);
 
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/data.json`)
      .then((response) => response.json())
      .then((logements) => setLogement(logements))
      .catch((error) => console.log(error));
  }, []);

  const title ="Chez vous, partout et ailleurs";
  return (
    <div className='main-container'>
      <Banner image={bannerImageHome} title={title} />
      <div className="card-container">
            {logements && logements.map((logement) => (
                <article key={logement.id}>
                    <Link to={`/fichelogements/${logement.id}`}>
                        <Card image={logement.cover} title={logement.title} />
                    </Link>
                </article>
            ))}
        </div>
      
    </div>
  );
};

export default Home;