import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tarjeta = ({ id, imagen, titulo }) => {
  const navigate = useNavigate();

  return (
    <div className="tarjeta" onClick={() => navigate(`/detalle/${id}`)}>
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
    </div>
  );
};

export default Tarjeta;
