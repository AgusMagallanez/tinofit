import React from "react";
import "../styles/componentsStyles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <div className="about-me-biography">
          <h2>Biografía</h2>
          <p>
            ¡Hola! Soy Tino, y quizás ya me conozcas, pero si no, es un placer
            presentarme. A mis 19 años, estoy comprometido a construir mi futuro
            a través del fitness, ayudando a otros a alcanzar sus objetivos, tal
            como lo hice yo de manera natural. Quiero decirte algo importante:
            mucho de lo que ves en redes sociales no es real. Pero con esfuerzo
            y sacrificio, puedes lograr cosas que parecen imposibles y cambiar
            tu vida y mente por completo. Estoy aquí para guiarte y acompañarte
            en ese cambio que tanto deseas. ¡Déjame ayudarte a lograrlo!
          </p>
        </div>
        <div className="images-container">
          <div className="image-box">
            <img
              src="/before-after.png"
              alt="antes y después del cambio físco de tino"
            />
          </div>
          {/* <div className="image-box">
            <img src="/pic2.JPG" alt="tino antes de su cambio físico" />
            <p>Antes</p>
          </div>
          <div className="image-box">
            <img src="pic1.png" alt="tino después de su cambio físico" />
            <p>Después</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
