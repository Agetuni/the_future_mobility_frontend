import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddVehicleSlice, getVehicals } from '../../redux/vehical_reducer';
import '../assets/styles/vehicle.scss';

const AddVehicle = () => {
  const dispatch = useDispatch();

  const [vehical, setProduct] = React.useState({
    name: '',
    image: '',
    enginepower: '',
    enginetourque: '',
    transmission: '',
    fuel_capacity: '',
    seat: ''
  });
  const handleChange = (e) => {
    setProduct({
      ...vehical,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const submitValue = (formData) => {
    dispatch(AddVehicleSlice(formData));
    dispatch(getVehicals);
    navigate('/');
  };
  const validateFields = (form) => {
    if (vehical.name !== '' && vehical.image !== '' && vehical.enginepower !== '' && vehical.enginetourque !== '' && vehical.transmission !== '' && vehical.fuel_capacity !== '' && vehical.seat !== '') {
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('this is sth')
    console.log(vehical);
    if (validateFields(e.target)) {
      var requestData ={
        vehicle :{
          name: vehical.name,
          image:vehical.image,
          enginepower: vehical.enginepower,
          enginetourque:vehical.enginetourque,
          transmission: vehical.transmission,
          fuel_capacity:vehical.fuel_capacity,
          seat:vehical.seat
        },
      };
      console.log(requestData)
      submitValue(requestData);
    }
    else {
      alert('Please fill all the fields');
    }
  };
  return (
    <div className="container add-vehicle-container">
      <span className='add-vehicle-header'> Add Vehicle</span>
      <div className="row">
        <form onSubmit={(e) => handleSubmit(e)} className='add-vehicle-form'>
          <div className="form-group">
            <label>Vehicle Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" required
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Engine Power</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" required
              name='enginepower'
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Engine Torque</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" required
              name='enginetourque'
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Transmition</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" required
              name='transmission'
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Fuel Capacity</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" required
              name='fuel_capacity'
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Seat</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" required
              name='seat'
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="text" className="form-control" id="formGroupExampleInput2"
              name='image'
              value={vehical.image}
              onChange={handleChange} />
          </div>
          <div className='button-green'>
            <button type="submit" className="btn btn-primary btn-lg btn-block detail-reserve-btn">Save</button>

          </div>
        </form>

      </div>
    </div>
  );
};
export default AddVehicle;
