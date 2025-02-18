// src/componentes/Tarjeta.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar a la página de detalles

const Tarjeta = ({ imagen, titulo, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalle/${id}`);
  };

  return (
    <div className="tarjeta" onClick={handleClick}>
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
    </div>
  );
};

export default Tarjeta;
