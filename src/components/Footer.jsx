import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, YouTube } from "@mui/icons-material";
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
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
