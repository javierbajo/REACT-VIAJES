import React from 'react'
import '../../styles/ListFrutas.css'
import { Link } from 'react-router-dom';

const renderFruits = (fruits) =>{
    return fruits.map((fruit,i) => (
        <Link to={`./${fruit.fruitName}`}style={{textDecoration: 'none'}} key={i}>
      <li key={fruit.id} className="fruitCard">
        <div className="fruitCard-imageContainer">
          <img
            src={fruit.image}
            alt={fruit.fruitName}
            className="fruitCard-image"
          />
        </div>
        <div className="fruitCard-info">
          <h2 className="fruitCard-name">
            {fruit.fruitName} ({fruit.type})
          </h2>
          <p className="fruitCard-p1">Origen: {fruit.origin}</p>
          <p className="fruitCard-p2">Precio:{fruit.priceKg}€/Kg</p>

        </div>
      </li>
      </Link>
    ));

}
const ListFrutas = ({fruits}) => {

  return (
    <section>{renderFruits(fruits)}</section>
  )
}

export default ListFrutas