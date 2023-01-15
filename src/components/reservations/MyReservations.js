import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import delres from '../../redux/reservations/delresSlice'
import BASE_URL from '../../api';
import '../assets/styles/reservation.scss';

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
      <div className="container reservation-container">
        <span className='myreservatin-header'> My Reservation</span>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Reservation Number</th>
              <th scope="col">Vehical</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
};
export default MyReservations;
