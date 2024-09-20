import React from "react";
import PlanCard from "./PlanCard";
import "../styles/componentsStyles/PlansSection.css";

const plans = [
  {
    title: "Plan Básico",
    description: "Un plan perfecto para iniciarse en el mundo del fitness.",
    price: "$29.99",
    image: "/about-me-pic.png",
  },
  {
    title: "Plan Avanzado",
    description:
      "Para aquellos que ya tienen experiencia y buscan más desafíos.",
    price: "$49.99",
    image: "/about-me-pic.png",
  },
  {
    title: "Plan Premium",
    description: "El plan más completo con seguimiento personalizado.",
    price: "$69.99",
    image: "/about-me-pic.png",
  },
  {
    title: "Otro Plan",
    description: "Descrpición sobre lo que incluye el plan",
    price: "$100.00",
    image: "/about-me-pic.png",
  },
  {
    title: "Otro Plan",
    description: "Descrpición sobre lo que incluye el plan",
    price: "$100.00",
    image: "/about-me-pic.png",
  },
  {
    title: "Otro Plan",
    description: "Descrpición sobre lo que incluye el plan",
    price: "$100.00",
    image: "/about-me-pic.png",
  },
];

const PlansSection = () => {
  return (
    <section className="plans-section">
      {/* <h1 className="section-title">Nuestros Planes</h1> */}
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            image={plan.image}
          />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
