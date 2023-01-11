import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import motorDetail from '../../redux/motorcycles/detail.service';
import reservation from '../../redux/reservations/reservation.service';
import totalPrice from '../../helpers/dateHandler';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import './reservation.scss';
import { updatemotor } from '../../redux/motorcycle/updatemotorSlice';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [reserved, setReserved] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const motorD = useSelector((state) => state.motor.motor);

  const userInfo = JSON.parse(localStorage.getItem('user'));

  const d = totalPrice(startDate, endDate);
  const result = d * motorD.rental_price;
  useEffect(() => {
    if (params !== 'undefined') {
      dispatch(motorDetail(params.mid));
    }
  }, [params, dispatch]);

  const updateHandler = (value) => {
    const state = { id: value, reserved: true };
    dispatch(updatemotor(state));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (result > 0) {
      if (startDate === '' || endDate === '' || city === '') {
        setMessage('Please fill all the fields');
      } else {
        const reservebike = {
          motorcycle_id: params.mid,
          user_id: userInfo,
          start_date: startDate,
          end_date: endDate,
          total_price: result,
          city,
        };
        dispatch(reservation(reservebike));
        setReserved(true);
        setMessage('Motorcycle reserved successfully');
        navigate('/my_reservations');
      }
    } else {
      setMessage('End date must be greater than start date');
    }
  };

  return (
    <div className="wrapper">
      <div>
        <Navbar />
        <Toggle />
      </div>
      <div className="reservation-container">
        <h1>Make a Reservation</h1>
        <form className="form-container form-reserve" onSubmit={submitHandler}>
          {reserved && message === 'Motorcycle reserved successfully' ? (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}

          <div className="form-inputs">
            <div className="city">
              <input
                type="text"
                placeholder="City"
                name="city"
                className="form-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="start-date-sec">
              <p>Start Date</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="startDate"
                className="form-input"
                minDate={new Date()}
                required
              />
            </div>
            <div className="end-date-sec">
              <p> End Date</p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                name="endDate"
                className="form-input"
                minDate={new Date()}
                required
              />
            </div>
          </div>
          <p>
            Total Price: $
            {result}
          </p>
          {reserved ? (
            <button type="submit" className="btn-disbaled-reserve" disabled>
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="btn-enable-reserve"
              value={params.mid}
              onClick={(e) => updateHandler(e.target.value)}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Reservation;
