import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";
import VehicalCard from "./vehical";
import BASE_URL from "../../api";

const VehicalList = () => {
  const [Vehicals, setVehicals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}api/v1/vehicles/`);
      setVehicals(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {Vehicals.length
        ? Vehicals.map((Vehical) => (
            <VehicalCard key={nanoid()} vehical={Vehical} />
          ))
        : null}
    </div>
  );
};

export default VehicalList;
