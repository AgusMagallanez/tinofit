import React from "react";
import PlansSectionComp from "../components/PlansSection";
import AboutMeComp from "../components/AboutMe";
import PaymentsMethodsComp from "../components/PaymentsMethods";
import "../styles/pagesStyles/Home.css";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <AboutMeComp />
        <hr />
        <PlansSectionComp />
        <PaymentsMethodsComp />
      </section>
    </>
  );
};

export default Home;
