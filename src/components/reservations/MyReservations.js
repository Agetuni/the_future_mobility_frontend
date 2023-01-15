import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import delres from '../../redux/reservations/delresSlice'
import BASE_URL from '../../api';

const MyReservations = () => {
  const userid =localStorage.getItem('id') // use this is as param
  const [loading, setLoading] = useState(true);
  const [myreservations, setMyReservations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      
      const response = await axios.get(`${BASE_URL}api/v1/users/1/reservations`, //u can add user id from localstorage
        {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }
      );
      setLoading(false);
      console.log(response.data);
      setMyReservations(response.data);
    };
    fetchData();
    
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();



  
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
            {
              myreservations.map((res) => {
                return (
                  <>
                  <p>{res.id} </p>
                  </>
                )
              })
              
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default MyReservations;
