/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import {
  FaFacebook, FaInstagram, FaTwitter, FaWhatsapp,
} from 'react-icons/fa';
import 'swiper/css/bundle';
import '../assets/styles/swiper.scss';
import './vehicalcard.scss';
import BASE_URL from '../../api';

const VehicalCard = ({ vehical }) => {
  const params = useParams();

  return (
    <>
      <div className="card-container">
        <Swiper
          centeredSlides
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView="auto"
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          
              <SwiperSlide key={nanoid()}>
                <Link to={`/vehicals/${vehical.id}`} key={nanoid()}>

                  <div className="card card-content">
                    <div className="img-div">
                      <img src={vehical.image} alt="" className="imgSize" width="200px"/>
                    </div>
                    <ul>
                      <li className="modvehical">
                        model
                      </li>
                      <li className="content-id">
                        ID:
                        {' '}
                        {vehical.id}
                      </li>
                    </ul>
                    <div>
                      <i className="uil uil-star" />
                    </div>
                    <ul className="socials">
                      <li><FaFacebook /></li>
                      <li><FaInstagram /></li>
                      <li><FaTwitter /></li>
                      <li><FaWhatsapp /></li>
                    </ul>
                  </div>

                </Link>
              </SwiperSlide>
            
            
        </Swiper>
      </div>
    </>
  );
};



export default VehicalCard;
