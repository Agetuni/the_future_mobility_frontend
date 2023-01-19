
import { nanoid } from '@reduxjs/toolkit';
import '../assets/styles/reservation.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getreservations,cancelTestDrive } from '../../redux/resevation_reducer';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const MyReservations = () => {

  const navigate = useNavigate()
  const myreservations = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const deleteHandler = (value) => {
    // dispatch(cancelTestDrive(value));
    confirmAlert({
      title: 'Are you sure to do this.',
      message: 'Reservation will be canceled',
      buttons: [
          {
              label: 'Yes',
              className: 'btn btn-danger',
              onClick: () => {dispatch(cancelTestDrive(value)); }
          },
          {
              label: 'No',
              onClick: () => { navigate('/reservations');}
          }
      ]
  });
  };
  useEffect(() => {
    dispatch(getreservations());
  }, []);


  return (

    <>
      <div className="container reservation-container">
        <span className='myreservatin-header'> My Reservation</span>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Res #</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">Vehicle</th>
              <th scope="col">Action</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {myreservations?.map((reservation) => {
              return (
                <tr key={nanoid()}>
                  <td>#Reserv{reservation.id}</td>
                  <td>{reservation.address}</td>
                  <td>{new Date(reservation.reserve_date).toDateString()}</td>
                  <td>{reservation.vehicle_name}</td>
                  <td className='action-button-container'>
                    <button className='btn btn-danger' onClick={() => deleteHandler(reservation.id)}> Cancel </button>
                  </td>

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
