import React from "react";
import PaymentsMethodsComp from "../components/PaymentsMethods";
import "../styles/pagesStyles/PaymentMethods.css";

const PaymentMethods = () => {
  return (
    <>
      <div className="payment-page-container">
        <PaymentsMethodsComp />
        <p>
          ¡Escríbeme{" "}
          <a
            href="https://wa.me/34633163966"
            target="_blank"
            rel="noopener noreferrer"
          >
            aquí
          </a>{" "}
          para saber más sobre los métodos de pago disponibles!
        </p>
      </div>
    </>
  );
};

export default PaymentMethods;
