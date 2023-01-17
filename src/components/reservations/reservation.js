import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addreservation from '../../redux/reservations/addreservation.service';
import { useParams, useNavigate } from 'react-router-dom';
import { updatevehical } from '../../redux/vehical/updatevehicalSlice';

const AddReservation = () => {

  const [tdate, setDate] = useState(new Date());
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [reserved, setReserved] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const userId = JSON.parse(localStorage.getItem('user')).id;

  const updateHandler = (value) => {
    
    const state = { id: value, reserved: true };
    dispatch(updatevehical(state));
  };


  const submitHandler = (e) => {
    e.preventDefault();
    if (result > 0) {
      if (tdate === '' || city === '') {
        setMessage('Please fill all the fields');
      } else {
        const reserve = {
          vehical_id: params.id,
          user_id: userId,
          date: tdate,      
          address,
        };
        dispatch(addreservation(reserve));
        setReserved(true);
        setMessage('Vehical reserved successfully');
        navigate('/reservations');
      }
    } else {
      setMessage('End date must be greater than start date');
    }
  };


  return (
    <div className="container ">
      <div>{message} </div>
      <span className='add-vehicle-header'> Add Reservation</span>
      <div className="row">
        <form className='add-vehicle-form' onSubmit={submitHandler}>
          <div className="form-group">
            <label>email</label>
            <input placeholder={JSON.parse(localStorage.getItem('user')).email} type="text" className="form-control" id="formGroupExampleInput" disabled />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input value={tdate} onChange={(e)=> setDate(e.target.value)} type="date" className="form-control" id="formGroupExampleInput2" required />
          </div>
          <div className="form-group">
            <label>Address</label>
          
            <input
                type="text"
                placeholder="Address"
                name="city"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
          </div>
          <div className="form-group">
            <label >Vehicle</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option> car 1</option>
              <option> car 2</option>
              <option> car 3</option>
              <option> car 4</option>
              <option> car 5</option>
            </select>
          </div>
          {reserved ?
            (
              <div className='button-green'>
            <button type="button" className="btn btn-primary btn-lg btn-block detail-reserve-btn" disabled>Reserve</button>

          </div>
            ) : (
              <div className='button-green'>
            <button type="button" className="btn btn-primary btn-lg btn-block detail-reserve-btn" value={params.id}
              onClick={(e) => updateHandler(e.target.value)}>Reserve</button>

          </div>
          )}
          
        </form>

      </div>
    </div>
  );
};

export default AddReservation;
