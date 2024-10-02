import React from "react";
import { Link } from "react-router-dom";
import PlansSectionComp from "../components/PlansSection";
import PaymentsMethodsComp from "../components/PaymentsMethods";
import { Instagram, YouTube } from "@mui/icons-material";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/pagesStyles/Home.css";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <section className="hero-section">
          <div className="hero-section__content">
            {/* <h2>Bienvenido a TINOFIT</h2> */}

            <div className="hero-socials">
              <a
                href="https://www.instagram.com/tinolifestyle_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram style={{ fontSize: "2.5rem" }} />
              </a>

              <a
                href="https://www.youtube.com/@tinofit99"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube style={{ fontSize: "2.5rem" }} />
              </a>

              <a
                href="https://wa.me/34633163966"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp style={{ fontSize: "2.5rem" }} />
              </a>
            </div>
            {/* 
            <Link to="/planes">
              <button className="home-btn">¡Empezá tu cambio hoy!</button>
            </Link> */}
          </div>
        </section>
        <PlansSectionComp />
        <PaymentsMethodsComp />
      </section>
    </>
  );
};

export default Home;
