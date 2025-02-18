// src/componentes/Filtro.jsx
import React from 'react';

const Filtro = ({ onFilterChange }) => {
  return (
    <div className="filtro">
      <input
        type="text"
        id="search"
        placeholder="Filtrar por título"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filtro;
