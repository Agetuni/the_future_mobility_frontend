import React ,{useState , useEffect} from 'react'
import axios from 'axios' 
import BASE_URL from '../../api';
import Vehical from '../vehicals/vehical';

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Vehicals = () => {
    const [vehicals, setVehicals] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}api/v1/vehicles/`)
            .then(resp => {
                setVehicals(resp.data)
                
            
            })
        .catch(resp => console.log(resp))
    }, [vehicals.length])
    
    const grid = vehicals.map( (vehical, index) => {
        const { name, image , details} = vehicals
    
        return (
          <Vehical 
            key={index}
            name={name}
            image_url={image}
            details={details}
           
          />
        )
      })
    
      return (
        <Home>
          
          <Grid>{grid}</Grid>
        </Home>
      )
    }
    
    export default Vehicals