import React from "react";
 import '../../styles/Actividades/Actividades.css';
import { Link } from "react-router-dom";

const renderActivities = (activities) => {
  return activities.map((activity, i) => (
    <Link to={`./${activity._id}`} style={{ textDecoration: "none" }} key={i}>
      <li key={activity.id} className="article_actividad">
        <div className="actividad_imagenContainer">
          <img
            src={activity.activityImg}
            alt={activity.activityName}
            className="actividad_image"
          />
        </div>
        <div className="actividad_info">
          <h2 className="actividad_name">
            {activity.activityName} ({activity.activityDescription})
          </h2>
           <p className="actividad_place">Place:{activity.activityPlace}</p>
           <p className="actividad_date">Date:{activity.activityDate}</p>
           <p className="actividad_time">Place:{activity.activityTime}</p>
          <p className="actividad_precio">Precio:{activity.activityPrice}€/Kg</p>
        </div>
      </li>
    </Link>
  ));
};
const ListActividades = ({ activities }) => {
  return <section className='section_actividades'>{renderActivities(activities)}</section>;
};
export default ListActividades;
