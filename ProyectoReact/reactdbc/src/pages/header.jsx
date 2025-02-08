import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Mi Aplicación</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Acerca</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
