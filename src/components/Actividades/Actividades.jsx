import {useEffect, useState} from 'react';
  // import '../../styles/Actividades/Actividades.css';
import ListActividades from './ListActividades';

const Actividades = () => {
  const [activities, setActivities] = useState([]);

  const getDataAPI = async ()=>{
      const response = await fetch('https://api-node-viajes.vercel.app/activities');
      const res = await response.json();
      setActivities(res);
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
    <div className='section-actividades'>
      <ListActividades activities = {activities} />
    </div>
  )
}

export default Actividades