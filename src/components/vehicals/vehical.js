/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import '../assets/styles/swiper.scss';
const VehicalCard = ({ vehical }) => {
  const params = useParams();
  return (


    <div className="card-content" key={nanoid()}>
      <Link to={`/vehicals/${vehical.id}`} >
        <div className="vehicle-image-container">
          <img src={vehical.image} className="vehicle-image" width="100%" />
        </div>
      </Link>
      <div className='vehice-detail'>
        <p>{vehical.name}</p>
        <p className='vehice-detail-paragraph'>The Vespa c20 is stunnning moped with a modern electoronic system and more</p>
      </div>
    </div>
  );
};
export default VehicalCard;
