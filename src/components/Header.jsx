import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/componentsStyles/Header.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo TINOFIT" />
        </Link>
      </div>
      <nav className="nav-bar">
        <ul className="desktop-nav">
          <li>
            <Link to="/acerca-de">Acerca de</Link>
          </li>
          <li>
            <Link to="/planes">Planes</Link>
          </li>
          <li>
            <Link to="/medios-pago">Medios de Pago</Link>
          </li>
        </ul>

        {/* IconButton solo visible en mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          className="menu-button"
        >
          <MenuIcon style={{ fontSize: "2.4rem" }} />
        </IconButton>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "transparent",
              borderRadius: "3px",
              height: "auto",
              maxHeight: "90vh",
              overflow: "auto",
              boxShadow: "2px 2px 2px 1px #9e9e9e3c",
            },
          }}
        >
          <div className="drawer-content">
            <ul>
              <li>
                <Link to="/acerca-de" onClick={toggleDrawer}>
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/planes" onClick={toggleDrawer}>
                  Planes
                </Link>
              </li>
              <li>
                <Link to="/medios-pago" onClick={toggleDrawer}>
                  Medios de Pago
                </Link>
              </li>
            </ul>
          </div>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
