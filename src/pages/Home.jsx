import React from "react";
import PlansSection from "../components/PlansSection";
import "../styles/pagesStyles/Home.css";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <section className="about-me">
          <div className="about-me-container">
            <div className="about-me-image">
              <img src="/about-me-pic.png" alt="Foto de Tino" />
            </div>

            <div className="about-me-text">
              <h1>Sobre Mí</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, odio dicta tenetur dolore ut temporibus quia maiores
                quod expedita minima repellendus voluptates incidunt, deleniti
                tempore dolorem suscipit culpa aperiam exercitationem.
              </p>
            </div>
          </div>
        </section>
        <PlansSection />
      </section>
    </>
  );
};

export default Home;
