import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './vehicaldetail.scss';
import BASE_URL from '../../api';

const VehicalDetails = () => {
  const params = useParams();
  const [vehical, setvehical] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}api/v1/vehicles/${params.id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        },
      );
      setvehical(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div>
        
      </div>
      <div className="vehical-details-container">
        <div className="vehical-image">
          {vehical.image ? (
            <img
              src={`${vehical.image}`}
              alt="" width="200px"
            />
          ) : (
            <img
              src={vehical.image}
              alt=""
            />
          )}
          <h1 className="vehical-model">model</h1>
        </div>

        <div className="vehical-info">

          <ul className="vehical-spec-details">
            <li>
              Model:
              XX
            </li>
           
          </ul>
          <Link
                to={`/vehical/${params.id}/reservation`}
              >
                <button type="button" className="reserve-btn">
                  Reserve
                </button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicalDetails;
