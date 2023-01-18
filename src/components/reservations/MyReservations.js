
import { nanoid } from '@reduxjs/toolkit';
import '../assets/styles/reservation.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getreservations } from '../../redux/resevation_reducer';
import { cancelTestDrive } from '../../redux/resevation_reducer';
const MyReservations = () => {


  const myreservations = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const deleteHandler = (value) => {
    console.log(value);
    dispatch(cancelTestDrive(value));
  };
  useEffect(() => {
    dispatch(getreservations());
    console.log('ue effe ')
  }, []);

  console.log(myreservations)

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
              <th></th>

            </tr>
          </thead>
          <tbody>
            {myreservations?.map((reservation) => {
              return (
                <tr key={nanoid()}>
                  <th scope="row">{reservation.id}</th>
                  <td>#RES123</td>
                  <td>{reservation.address}</td>
                  <td>{new Date(reservation.reserve_date).toDateString()}</td>
                  <td></td>
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
