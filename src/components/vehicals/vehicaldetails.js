import axios from 'axios';
import BASE_URL from '../../api';
import '../assets/styles/vehicle.scss';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const VehicalDetails = () => {
  const params = useParams();
  const [vehical, setvehical] = useState([]);


  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}api/v1/vehicles/${params.id}`,
        {
          headers: {
            Authorization: `${JSON.parse(localStorage.getItem('user')).token}`,
          },
        },
      );
      setvehical(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row detail">
        <div className="col-sm detail-img ">
          {vehical.image ? (
            <img
              src={`${vehical.image}`}
              alt="Vehicle Image" className='responsive'
            />
          ) : (
            <img
              src={vehical.image}
              alt="Vehicle Image"
            />
          )}
        </div>
        <div className="col-sm  detail-info-container">
          <div className='detail-info'>
            <div className='detail-model'>
              VESPA 946
            </div>
            <div className='detial-info-texts shade'>
              <span>Engine Power</span> <span>158 hp @ 5,500 rpm</span>
            </div>
            <div className='detial-info-texts'>
              <span>Engine Torque</span> <span>158 hp @ 5,500 rpm</span>
            </div>
            <div className='detial-info-texts shade'>
              <span>Transmition</span> <span>8-speed shiftable automatic</span>
            </div>
            <div className='detial-info-texts'>
              <span>Fuel Capacity</span> <span>13.2 gal. </span>
            </div>
            <div className='detial-info-texts shade'>
              <span>Seat</span> <span>4 </span>
            </div>

            <div className='button-green'>
              <Link to='/reserve' type="button" className="btn btn-primary btn-lg btn-block detail-reserve-btn">Reserve</Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VehicalDetails;
