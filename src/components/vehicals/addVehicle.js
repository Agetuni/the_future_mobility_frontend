import '../assets/styles/vehicle.scss';

const AddVehicle = () => (
  <div className="container add-vehicle-container">
    <span className='add-vehicle-header'> Add Vehicle</span>
    <div className="row">
      <form className='add-vehicle-form'>
        <div className="form-group">
          <label>Vehicle Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" required />
        </div>
        <div className="form-group">
          <label>Engine Power</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" required />
        </div>
        <div className="form-group">
          <label>Engine Torque</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" required />
        </div>
        <div className="form-group">
          <label>Transmition</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" required />
        </div>
        <div className="form-group">
          <label>Fuel Capacity</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" required />
        </div>
        <div className="form-group">
          <label>Seat</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" />
        </div>
        <div className='button-green'>
          <button type="button" className="btn btn-primary btn-lg btn-block detail-reserve-btn">Save</button>

        </div>
      </form>

    </div>
  </div>
);
export default AddVehicle;
