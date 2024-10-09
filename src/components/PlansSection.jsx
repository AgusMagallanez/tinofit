import React, { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import client from "../services/contentful";
import "../styles/componentsStyles/PlansSection.css";

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
                : "./about-me-pic.JPG"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
