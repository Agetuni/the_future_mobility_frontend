import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import './myreservations.scss';
import { delres } from '../../redux/reservations/delresSlice';
import BASE_URL from '../../api';

const MyReservations = () => {
  const [loading, setLoading] = useState(true);
  const [myreservations, setMyReservations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}api/v1/reservations`,
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        },
      );
      setLoading(false);
      setMyReservations(response.data.reservation);
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const delHandler = (value) => {
    dispatch(delres({ id: value }));
  };

 

  return (
    <>
      <div className="wrapper">
        <div>
          
        </div>
        <div className="myres-container">
          <h1>My Reservations</h1>
          <div className="reservations">
            <table>
              <thead>
                <tr>
                  <th>Reserve ID</th>
                  <th>Motor ID</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Total Price</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading === false
                  && Object.values(myreservations)
                    .filter((reservation) => reservation.user_id === user)
                    .map((reservation) => (
                      <tr key={nanoid()}>
                        <td>{reservation.id}</td>
                        <td>
                          <Link
                            to={`/categories/:id/motorcycles/${reservation.motorcycle_id}`}
                            style={{
                              color: '#97bf36',
                              border: '1px solid #97bf36',
                              padding: '0.5rem',
                            }}
                          >
                            {reservation.motorcycle_id}
                          </Link>
                        </td>
                        <td>{reservation.start_date}</td>
                        <td>{reservation.end_date}</td>
                        <td>
                          $
                          {reservation.total_price}
                        </td>
                        <td>{reservation.city}</td>
                        <td>
                          <button
                            type="button"
                            className="cancelBtn"
                            value={reservation.id}
                            onClick={(e) => {
                              delHandler(e.target.value);
                              cancelHandler(reservation.motorcycle_id);
                            }}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyReservations;
