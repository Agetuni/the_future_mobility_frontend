import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import './vehicaldetail.scss';
import BASE_URL from '../../api';

const vehicalDetail = () => {
  const params = useParams();
  const [vehical, setVehical] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}api/v1/vehicals/${params.id}` //add authentication header here
      );
      setVehical(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div>
        <Navbar />
        <Toggle />
      </div>
      <div className="vehical-details-container">
        <div className="vehical-image">
          {vehical.image ? (
            <img
              src={`${BASE_URL}${vehical.image}`}
              alt=""
            />
          ) : (
            <img
              src={vehical.image}
              alt=""
            />
          )}
          <h1 className="vehical-model">MOdel X</h1>
        </div>

        <div className="vehical-info">

          <ul className="vehical-spec-details">
            <li>
              Model:
              Model X
            </li>
            <li>
              Brand:
              tesla
            </li>
            <li>
              Rental Price: $
              1000
            </li>
          </ul>
          {/* <div>
            {vehical.reserved ? (
              <button type="button" className="reserved-btn" disabled>
                Reserved
              </button>
            ) : (
              <Link
                to={`/categories/${params.id}/vehicals/${params.id}/reservation`}
              >
                <button type="button" className="reserve-btn">
                  Reserve
                </button>
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default vehicalDetail;
