import React from "react";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <div className="about-me-image">
          <img src="/about-me-pic.png" alt="Foto de Tino" />
        </div>

        <div className="about-me-text">
          <h1>Sobre mí</h1>
          <p>
            Mi nombre en Tino como ya muchos conocerán pero si no es así me
            presento. Tengo 19 años y estoy en busca de construir mi futuro a
            base del fitness ayudando a otras personas a poder lograr lo que
            logré yo naturalmente, dejame decirte todo lo que escuhás en las
            redes es una mentira, poniendo el trabajo y el sacrificio se pueden
            lograr cosas que nadie te creería que las lograste. Dejame ayudarte
            para lograr ese cambio que tanto deseas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
