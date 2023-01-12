import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import delres from '../../redux/reservations/delresSlice'
import BASE_URL from '../../api';

const MyReservations = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [myreservations, setMyReservations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}/api/v1/users/${params.id}/reservations`,
        
        
      );
      setLoading(false);
      console.log(response.data);
      setMyReservations(response.data);
    };
    fetchData();
    
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = 2;// JSON.parse(localStorage.getItem('user'));

  
  const delHandler = (value) => {
    dispatch(delres({ id: value }));
  };

  const cancelHandler = (value) => {
    const state = { id: value, reserved: false };
    
    navigate('/vehicals');
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
                  <th>Vehical ID</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                 
                  <th>Address</th>
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
                            to={`/vehicals/${reservation.vehical_id}`}
                            style={{
                              color: '#97bf36',
                              border: '1px solid #97bf36',
                              padding: '0.5rem',
                            }}
                          >
                            {reservation.vehical_id}
                          </Link>
                        </td>
                        <td>{reservation.start_date}</td>
                        <td>{reservation.end_date}</td>
                       
                        <td>{reservation.address}</td>
                        <td>
                        <button
                            type="button"
                            className="cancelBtn"
                            value={reservation.id}
                            onClick={(e) => {
                              
                              cancelHandler(reservation.vehical_id);
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
