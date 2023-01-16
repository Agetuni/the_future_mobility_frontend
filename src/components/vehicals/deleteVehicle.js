import BASE_URL from "../../api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { deletevehical } from "../../redux/vehical/delvehicalSlice";



const DeleteVehicle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Vehicals, setVehicals] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${BASE_URL}api/v1/vehicles/`);
            setVehicals(response.data);
        };
        fetchData();
    }, []);


    const delHandler = (value) => {
        dispatch(deletevehical({ id: value }));
        navigate('/')
    };
    
    return (
        <div className="container">
            <div className="delete-vehicle-container">
                <span className='add-vehicle-header'> Delete Vehicle</span>
                <div className="row  ">

                    {Vehicals.length
                        ? Vehicals.map((Vehical) => (
                            <div className="col-sm-4 vehicle-delete-card " key={nanoid()}>
                               <div className="card " >
                               <img src={Vehical.image} width="100%" height="100%"/>
                                    <div className="card-body">
                                       
                                    <button
                            type="button"
                            className="dangerbtn"
                            value={Vehical.id}
                            onClick={(e) => {
                              delHandler(e.target.value);
                              
                            }}
                          >
                            DeleteVehicle
                          </button>
                                    </div>
                            </div>
                           
                            </div>
                        ))
                        : null}
                </div>
            </div>
        </div>

    )
}
export default DeleteVehicle;