// src/App.jsx
import React, { useState, useEffect } from 'react';
import Tarjeta from './componentes/tarjeta';
import Filtro from './componentes/filtro';
import Detalle from './componentes/detalle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const API_KEY = '37YhROZqXLOP4lUDjv8oydps5o6dlXA6lLHNpaJK';

const App = () => {
  const [imagenes, setImagenes] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`
        );
        const data = await response.json();
        setImagenes(data);
      } catch (error) {
        console.error('Error al obtener datos de la API de NASA:', error);
      }
    };

    fetchImagenes();
  }, []);

  const imagenesFiltradas = imagenes.filter((img) =>
    img.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <h1>Imágenes de la NASA</h1>
        <Filtro onFilterChange={setFiltro} />
        <div className="tarjetas">
          {imagenesFiltradas.map((img, index) => (
            <Tarjeta
              key={index}
              imagen={img.url}
              titulo={img.title}
              id={img.date} // Usamos la fecha como identificador único
            />
          ))}
        </div>

        {/* Rutas para la página principal y la página de detalles */}
        <Routes>
          <Route path="/" element={<App />} /> {/* Página principal */}
          <Route path="/detalle/:id" element={<Detalle />} /> {/* Página de detalles */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
