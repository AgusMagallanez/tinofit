import React from "react";
import "../styles/componentsStyles/PlanCard.css";

const PlanCard = ({ title, description, price, image }) => {
  return (
    <div className="plan-card">
      <img src={image} alt={title} className="plan-image" />
      <div className="plan-details">
        <h2 className="plan-title">{title}</h2>
        <p className="plan-description">{description}</p>
        <p className="plan-price">{price}</p>
        <button className="plan-button">Adquirir Plan</button>
      </div>
    </div>
  );
};

export default PlanCard;
