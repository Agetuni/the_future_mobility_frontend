import React, { useState, useEffect } from 'react';

const AddReservation = () => {


  return (
    <div className="container ">
      <span className='add-vehicle-header'> Reserve</span>
      <div className="row">
        <form className='add-vehicle-form'>
          <div className="form-group">
            <label>email</label>
            <input type="text" className="form-control" id="formGroupExampleInput" disabled />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" className="form-control" id="formGroupExampleInput2" required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" required />
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

          <div className='button-green'>
            <button type="button" className="btn btn-primary btn-lg btn-block detail-reserve-btn">Reserve</button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default AddReservation;
