import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import delres from '../../redux/reservations/delresSlice'
import { updatevehical } from '../../redux/vehical/updatevehicalSlice';
import BASE_URL from '../../api';
import '../assets/styles/reservation.scss';
const MyReservations = () => {
  const [loading, setLoading] = useState(true);
  const [myreservations, setMyReservations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get(
        `${BASE_URL}/api/v1/users/2/reservations`,
        {
          headers: {
            Authorization: `${JSON.parse(localStorage.getItem('user')).token}`,
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
    
    dispatch(delres({value }));
  };

  // const cancelHandler = (value) => {
  //   const state = { id: value, reserved: false };
  //   dispatch(updatevehical(state))
  //   navigate('/vehicals');
  // };
  return (

    <>
      <div className="container reservation-container">
        <span className='myreservatin-header'> My Reservation</span>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Reservation Number</th>
              <th scope="col">address</th>
              <th scope="col">Reservation Date</th>
              <th scope="col">vehicle</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>

            {myreservations.map((reservation) => {
              return (
                <tr key={nanoid()}>
                  <th scope="row">{reservation.id}</th>
                  <td>#RES123</td>
                  <td>{reservation.address}</td>
                  <td>{reservation.reserve_date}</td>
                  <td ></td>
                  <td className='action-button-container'> <button value={reservation.id}  type="button" className='btn btn-danger' onClick={(e) => {
                    
                    delHandler(e.target.value);
                             
                  }}
                  > Delete </button>
                  <button   type="button" className='btn btn-danger'> Cancel </button></td>
                </tr>
              )
            })}




          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyReservations;