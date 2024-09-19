import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/componentsStyles/Header.css";
import { Margin } from "@mui/icons-material";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          className="menu-button"
          style={{ margin: "0" }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "transparent",
              borderRadius: "10px",
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
                <Link to="/about" onClick={toggleDrawer}>
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

      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo TINOFIT" />
        </Link>
      </div>
      <div className="search-icon">
        <IconButton
          color="inherit"
          onClick={() => alert("Funcionalidad de búsqueda próximamente!")}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
