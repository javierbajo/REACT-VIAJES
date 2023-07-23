import React from "react";
// import '../../styles/ListFrutas.css'
import { Link } from "react-router-dom";

const renderActivities = (activities) => {
  return activities.map((activity, i) => (
    <Link to={`./${activity._id}`} style={{ textDecoration: "none" }} key={i}>
      <li key={activity.id} className="fruitCard">
        <div className="fruitCard-imageContainer">
          <img
            src={activity.activityImg}
            alt={activity.activityName}
            className="fruitCard-image"
          />
        </div>
        <div className="fruitCard-info">
          <h2 className="fruitCard-name">
            {activity.activityName} ({activity.activityDescription})
          </h2>
          {/* <p className="fruitCard-p1">Origen: {destination.origin}</p>
          <p className="fruitCard-p2">Precio:{destination.priceKg}€/Kg</p> */}
        </div>
      </li>
    </Link>
  ));
};
const ListActividades = ({ activities }) => {
  return <section>{renderActivities(activities)}</section>;
};
export default ListActividades;
