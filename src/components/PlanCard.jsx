import React from "react";
import "../styles/componentsStyles/PlanCard.css";

const PlanCard = ({ title, description, price, image }) => {
  const handleWhatsAppClick = () => {
    const message = `Hola Tino, me interesa el plan: ${title}.`;
    const phoneNumber = "34633163966";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="plan-card">
      <img src={image} alt={title} className="plan-image" />
      <div className="plan-details">
        <h2 className="plan-title">{title}</h2>
        <p className="plan-description">{description}</p>
        <p className="plan-price">{price}</p>
        <button className="plan-button" onClick={handleWhatsAppClick}>
          Adquirir Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
