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
          </div>
        </section>
        <PlansSectionComp />
        <PaymentsMethodsComp />
      </section>
    </>
  );
};

export default Home;
