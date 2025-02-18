import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/home';
import Detalle from './componentes/detalle';
import './App.css';

const API_KEY = '37YhROZqXLOP4lUDjv8oydps5o6dlXA6lLHNpaJK';

const App = () => {
  const [imagenes, setImagenes] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const imagenesData = [];
        const cantidadDias = 20; // Contador para obtener las últimas 20 imágenes
        const fechaFin = new Date(); //Creo la fecha donde finaliza
        
        // Ciclo para obtener imágenes desde el día actual hacia atrás
        for (let i = 0; i < cantidadDias; i++) {
          const fecha = new Date(fechaFin);
          fecha.setDate(fecha.getDate() - i); // Resto i días de la fecha actual
          const fechaString = fecha.toISOString().split('T')[0]; // Formato YYYY-MM-DD

          // Solicitamos una imagen para cada fecha
          const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${fechaString}`
          );
          const data = await response.json();
          imagenesData.push(data); // Guardo la imagen de ese día
        }

        setImagenes(imagenesData); // Establezco todas las imágenes obtenidas
      } catch (error) {
        console.error('Error al obtener datos de la API de NASA:', error);
      }
    };

    fetchImagenes();
  }, []);

  // Filtrar imágenes
  const imagenesFiltradas = imagenes.filter((img) =>
    img.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home imagenes={imagenesFiltradas} setFiltro={setFiltro} />} />
        <Route path="/detalle/:id" element={<Detalle imagenes={imagenes} />} />
      </Routes>
    </Router>
  );
};

export default App;
