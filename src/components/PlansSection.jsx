import React, { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import client from "../services/contentful";
import "../styles/componentsStyles/PlansSection.css";

// const plans = [
//   {
//     title: "Plan Rutino",
//     description:
//       "Rutina personalizada para principiantes, intermedios y avanzados.",
//     price: "$29.99",
//     image: "/about-me-pic.png",
//   },
//   {
//     title: "Plan Rutino 2.0",
//     description:
//       "Rutina personalizada, chat de consultas conmigo y guias de alimentación en base a tu objetivo.",
//     price: "$49.99",
//     image: "/about-me-pic.png",
//   },
//   {
//     title: "Plan TINOFIT Personalizado",
//     description:
//       "Asesoría 1 a 1 conmigo, seguimiento semanal del físico y gimnasio, rutina personalizada, acceso a 1 videollamada por semana.",
//     price: "$69.99",
//     image: "/about-me-pic.png",
//   },
//   {
//     title: "Plan TINOFIT VIP",
//     description:
//       "Asesoría 1 a 1 conmigo con acceso a videollamadas, cambio de hábitos, rutina personalizada, guia alimentaria personalizada en base a tus objetivos, chat 24/7 conmigo  para desatar cualquier duda.",
//     price: "$100.00",
//     image: "/about-me-pic.png",
//   },
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
// ];

const PlansSection = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await client.getEntries({
          content_type: "title",
        });
        setPlans(response.items);
      } catch (error) {
        console.error("Error fetching plans from Contentful", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <section className="plans-section">
      <h1 className="section-title">Planes a tu medida</h1>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.fields.title}
            description={plan.fields.description}
            price={plan.fields.price}
            image={
              plan.fields.image
                ? plan.fields.image.fields.file.url
                : "/about-me-pic.png"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
