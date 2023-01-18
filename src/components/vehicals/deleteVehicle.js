import BASE_URL from "../../api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { Dispatch } from "react";
import { getVehicals, removeVehical } from "../../redux/vehical_reducer";
const DeleteVehicle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Vehicals = useSelector((state) => state.vehical);
    useEffect(() => {
        dispatch(getVehicals());
    }, []);


    const deleteHandler = (value) => {
        dispatch(removeVehical(value));
        dispatch(getVehicals());
        navigate('/');
    };

    return (
        <div className="container">
            <div className="delete-vehicle-container">
                <span className='add-vehicle-header'> Delete Vehicle</span>
                <div className="row  ">

                    {Vehicals ? Vehicals.length
                        ? Vehicals.map((Vehical) => (
                            <div className="col-sm-4 vehicle-delete-card " key={nanoid()}>
                                <div className="card " >
                                    <img src={Vehical.image} width="100%" height="100%" />
                                    <div className="card-body">

                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            value={Vehical.id}
                                            onClick={(e) => {
                                                deleteHandler(e.target.value);

                                            }}
                                        >
                                            Delete {Vehical.name}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))
                        : null
                        : null}
                </div>
            </div>
        </div>

    )
}
export default DeleteVehicle;