import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Card.css';


const Card = ({ name, image, country, id }) => {

  const [flag, setFlag] = useState(null);

  useEffect(() => {

    axios.get("https://restcountries.com/v3.1/name/" + country).then((res) =>
      setFlag(res.data[0].flags.svg)
    );
  }, [country]);

    return (

        <div className='recipe-card'>
          <div className='flag-cont'>
           <img className='flag-img' src={flag} alt="flag" />
          </div>
          <img className='recipe-img' src={image} alt="food-img"></img>
          <div className='info-cont'>
          <h4>{name}</h4>
          <button className='submit2'><Link to={`${id}`}>View</Link></button>
          </div>

        </div>
    );
};

export default Card;