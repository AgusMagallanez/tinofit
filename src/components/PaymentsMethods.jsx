import React from "react";
import "../styles/componentsStyles/PaymentMethods.css";

const PaymentsMethods = () => {
  return (
    <>
      <section className="payment-methods">
        <p className="payment-methods__title">Métodos de pago</p>
        <img
          src="./payment-methods.png"
          alt="métodos de pago disponibles"
          className="payment-methods__img"
        />
      </section>
    </>
  );
};

export default PaymentsMethods;
