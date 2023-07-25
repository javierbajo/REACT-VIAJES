import React from "react";
// import '../../styles/ListFrutas.css'
import { Link } from "react-router-dom";

const renderActivities = (activities) => {
  return activities.map((activity, i) => (
    <Link to={`./${activity._id}`} style={{ textDecoration: "none" }} key={i}>
      <li key={activity.id} className="destino">
        <div className="destino-imageContainer">
          <img
            src={activity.activityImg}
            alt={activity.activityName}
            className="destino-image"
          />
        </div>
        <div className="destino-info">
          <h2 className="destino-name">
            {activity.activityName} ({activity.activityDescription})
          </h2>
          {/* <p className="destino-p1">Origen: {destination.origin}</p>
          <p className="destino-p2">Precio:{destination.priceKg}€/Kg</p> */}
        </div>
      </li>
    </Link>
  ));
};
const ListActividades = ({ activities }) => {
  return <section>{renderActivities(activities)}</section>;
};
export default ListActividades;
