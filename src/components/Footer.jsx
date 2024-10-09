import React from "react";
import { Link } from "react-router-dom";
import { Instagram, YouTube } from "@mui/icons-material";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/componentsStyles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo TINOFIT" />
          </Link>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/tinolifestyle_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/@tinofit99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube />
          </a>
          <a
            href="https://wa.me/34633163966"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
