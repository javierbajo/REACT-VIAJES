import {useEffect, useState} from 'react';
import '../../styles/Frutas.css';
import ListDestinos from './ListDestinos';

const Destinos = () => {
  const [destinations, setDestinations] = useState([]);

  const getDataAPI = async ()=>{
      const response = await fetch('https://api-node-viajes.vercel.app/destinations');
      const res = await response.json();
      setDestinations(res);
  }
  useEffect(() => {

    getDataAPI();
/*
    fetch('http://localhost:3001/fruits')
    .then((response) => response.json())
    .then((data) => {
      setFruits(data);
      console.log(data);
    })
    .catch(error => {console.log(error)});
*/
  },[]);

  return (
    <div className='frutas-div'>
      <ListDestinos destinations = {destinations} />
    </div>
  )
}

export default Destinos