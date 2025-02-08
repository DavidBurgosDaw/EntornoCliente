import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2">Guia React</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link text-white hover-underline-animation">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white hover-underline-animation">Acerca</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white hover-underline-animation">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
