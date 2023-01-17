import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import BASE_URL from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import '../assets/styles/swiper.scss';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';
import VehicalCard from "./vehical";
const VehicalList = () => {
  const [Vehicals, setVehicals] = useState([]);
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}api/v1/vehicles/`);
      setVehicals(response.data);
    };
    fetchData();

  return (
    <>
      <div className=" container-swipper">
        <Swiper
          centeredSlides
          pagination={{ clickable: true }}
          spaceBetween={2}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 1,
            },
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="swipper">
          <div className="sliders">
            {Vehicals.length
              ? Vehicals.map((Vehical) => (
                <SwiperSlide key={nanoid()}>
                  <div className="sliderCard ">
                    <VehicalCard key={nanoid()} vehical={Vehical} />
                  </div>
                </SwiperSlide>
              ))
              : null}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default VehicalList;
