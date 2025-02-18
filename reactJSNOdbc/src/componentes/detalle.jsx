import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detalle = ({ imagenes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const imagen = imagenes[parseInt(id, 10)]; // Convierto el id a numero

  if (!imagen) return <h2>Imagen no encontrada</h2>;

  return (
    <div className="detalle">
      <h1>{imagen.title}</h1>
      <p>Fecha: {imagen.date}</p>
      <img src={imagen.url} alt={imagen.title} />
      <p>{imagen.explanation}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default Detalle;
