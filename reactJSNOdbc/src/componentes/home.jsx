import React from 'react';
import Filtro from './filtro';
import Tarjeta from './tarjeta';

const Home = ({ imagenes, setFiltro }) => {
  return (
    <div className="app">
      <h1>Investigaciones NASA</h1>
      <Filtro onFilterChange={setFiltro} />
      <div className="tarjetas">
        {imagenes.map((img, index) => (
          <Tarjeta
            key={index}
            imagen={img.url}
            titulo={img.title}
            id={index} // El id es el indice de las img
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
