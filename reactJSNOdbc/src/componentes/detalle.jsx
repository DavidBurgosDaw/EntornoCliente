// src/componentes/Detalle.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener los parámetros de la URL

const API_KEY = '37YhROZqXLOP4lUDjv8oydps5o6dlXA6lLHNpaJK';

const Detalle = () => {
  const { id } = useParams(); // Obtenemos el ID (fecha) de la URL
  const [imagenDetalle, setImagenDetalle] = useState(null);

  useEffect(() => {
    const fetchDetalle = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${id}`
        );
        const data = await response.json();
        setImagenDetalle(data);
      } catch (error) {
        console.error('Error al obtener los detalles:', error);
      }
    };

    fetchDetalle();
  }, [id]); // Recargamos cuando cambia el id

  if (!imagenDetalle) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <div className="detalle">
      <h1>{imagenDetalle.title}</h1>
      <img src={imagenDetalle.hdurl || imagenDetalle.url} alt={imagenDetalle.title} />
      <p><strong>Fecha:</strong> {imagenDetalle.date}</p>
      <p><strong>Descripción:</strong> {imagenDetalle.explanation}</p>
    </div>
  );
};

export default Detalle;
