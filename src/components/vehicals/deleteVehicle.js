import BASE_URL from "../../api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
const DeleteVehicle = () => {
    const [Vehicals, setVehicals] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${BASE_URL}api/v1/vehicles/`);
            setVehicals(response.data);
        };
        fetchData();
    }, []);
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
                                       
                                        <a href="#" className="btn btn-danger"> Delete {Vehical.name}</a>
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