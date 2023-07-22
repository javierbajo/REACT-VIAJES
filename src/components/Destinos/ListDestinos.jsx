import React from 'react'
import '../../styles/ListFrutas.css'
import { Link } from 'react-router-dom';

const renderDestinations = (destinations) =>{
    return destinations.map((destination,i) => (
        <Link to={`./${destination.fruitName}`}style={{textDecoration: 'none'}} key={i}>
      <li key={destination.id} className="fruitCard">
        <div className="fruitCard-imageContainer">
          <img
            src={destination.image}
            alt={destination.fruitName}
            className="fruitCard-image"
          />
        </div>
        <div className="fruitCard-info">
          <h2 className="fruitCard-name">
            {destination.fruitName} ({destination.type})
          </h2>
          <p className="fruitCard-p1">Origen: {destination.origin}</p>
          <p className="fruitCard-p2">Precio:{destination.priceKg}€/Kg</p>

        </div>
      </li>
      </Link>
    ));

}
const ListDestinos = ({destinations}) => {

  return (
    <section>{renderDestinations(destinations)}</section>
  )
}

export default ListDestinos