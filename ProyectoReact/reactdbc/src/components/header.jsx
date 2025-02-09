import React from "react";
import "../assets/css/header.css"; // Importa el archivo CSS
import { Link } from "react-router-dom"; // Importa Link para crear enlaces

const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Guía React
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
