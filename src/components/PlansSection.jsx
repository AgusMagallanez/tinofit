import React from "react";
import PlanCard from "./PlanCard";
import "../styles/componentsStyles/PlansSection.css";

const plans = [
  {
    title: "Plan Rutino",
    description:
      "Rutina personalizada para principiantes, intermedios y avanzados.",
    price: "$29.99",
    image: "/about-me-pic.png",
  },
  {
    title: "Plan Rutino 2.0",
    description:
      "Rutina personalizada, chat de consultas conmigo y guias de alimentación en base a tu objetivo.",
    price: "$49.99",
    image: "/about-me-pic.png",
  },
  {
    title: "Plan TINOFIT Personalizado",
    description:
      "Asesoría 1 a 1 conmigo, seguimiento semanal del físico y gimnasio, rutina personalizada, acceso a 1 videollamada por semana.",
    price: "$69.99",
    image: "/about-me-pic.png",
  },
  {
    title: "Plan TINOFIT VIP",
    description:
      "Asesoría 1 a 1 conmigo con acceso a videollamadas, cambio de hábitos, rutina personalizada, guia alimentaria personalizada en base a tus objetivos, chat 24/7 conmigo  para desatar cualquier duda.",
    price: "$100.00",
    image: "/about-me-pic.png",
  },
  // {
  //   title: "Otro Plan",
  //   description: "Descrpición sobre lo que incluye el plan",
  //   price: "$100.00",
  //   image: "/about-me-pic.png",
  // },
  // {
  //   title: "Otro Plan",
  //   description: "Descrpición sobre lo que incluye el plan",
  //   price: "$100.00",
  //   image: "/about-me-pic.png",
  // },
];

const PlansSection = () => {
  return (
    <section className="plans-section">
      <h1 className="section-title">Planes a tu medida</h1>
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
