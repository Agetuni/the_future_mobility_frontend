import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVehicals } from '../../redux/vehical_reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { reserve, getreservations } from '../../redux/resevation_reducer';
const AddReservation = () => {
  const vehicals = useSelector((state) => state.vehical);
  const user = useSelector((state) => state.user);
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getVehicals());
  }, []);
  const [reservation, setReservation] = useState({
    reserve_date: '',
    address: '',
    user_id: user.id,
    vehicle_id: id
  });
  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reserve(reservation));

    setReservation({
      reserve_date: '',
      address: '',
      user_id: user.id,
      vehicle_id: id
    });
    dispatch(getreservations())
    navigate('/reservations');
  };








  const vehicalOptions = vehicals?.map((vehical) => (
    <option key={vehical.id} value={vehical.id} selected={parseInt(id) === parseInt(vehical.id) ? true : null}>
      {vehical.name}
    </option>
  ));
  return (
    <div className="container ">
      <span className='add-vehicle-header'> Reserve</span>
      <div className="row">
        <form className='add-vehicle-form' onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label>User name </label>
            <input type="text" value={user.name} className="form-control" id="formGroupExampleInput" disabled />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" className="form-control" id="formGroupExampleInput2" name='reserve_date' required
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" name='address' required
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label >Vehicle</label>
            <select className="form-control" id="exampleFormControlSelect1" name='vehicle_id'
              onChange={handleChange}>
              {vehicalOptions}
            </select>
          </div>

          <div className='button-green'>
            <button type="submit" className="btn btn-primary btn-lg btn-block detail-reserve-btn">Reserve</button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default AddReservation;
