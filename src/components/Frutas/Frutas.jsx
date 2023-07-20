import {useEffect, useState} from 'react';
import '../../styles/Frutas.css';
import ListFrutas from './ListFrutas';

const Frutas = () => {
  const [fruits, setFruits] = useState([]);

  const getDataAPI = async ()=>{
      const response = await fetch('http://localhost:3001/fruits');
      const res = await response.json();
      setFruits(res);
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
      <ListFrutas fruits = {fruits} />
    </div>
  )
}

export default Frutas