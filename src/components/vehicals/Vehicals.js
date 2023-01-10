import React ,{useState , useEffect} from 'react'
import axios from 'axios' 
import BASE_URL from '../../api';



const Vehicals = () => {
    const [vehicals, setVehicals] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}api/v1/vehicles/`)
            .then(resp => {
                setVehicals(resp.data)
                
            
            })
        .catch(resp => console.log(resp))
    }, [vehicals.length])
    
    const list = vehicals.map(item => {
        return(<li key={item.id}>{item.name}</li>)

    })
  return (
    <div>{list} </div>
  )
}

export default Vehicals