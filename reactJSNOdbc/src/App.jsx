import React, { useState, useEffect } from 'react';
import Filtro from './componentes/filtro';
import Tarjeta from './componentes/tarjeta';
import "./App.css"
function App() {
  const [data, setData] = useState([]);  // Aquí guardamos los lanzamientos
  const [filtros, setFiltros] = useState({
    name: '',    
    status: 'todos',  
    recent: false   
  }); 

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  // Filtro de datos según los filtros
  const datosFiltrados = data.filter((lanzamiento) => {
    return (
      lanzamiento.name.toLowerCase().includes(filtros.name.toLowerCase()) &&
      (filtros.status === 'todos' ||
        (filtros.status === 'exito' && lanzamiento.success) ||
        (filtros.status === 'fallido' && !lanzamiento.success))
    );
  });

  // Si el filtro Reciente está activado, solo mostrare los primeros 10
  const datosFinales = filtros.recent ? datosFiltrados.slice(0, 10) : datosFiltrados;

  return (
    <div className="App">
      <h1>Lanzamientos de SpaceX</h1>
      <Filtro filtros={filtros} setFiltros={setFiltros} />
      <div className="cards-container">
        {datosFinales.map((lanzamiento) => (
          <Tarjeta key={lanzamiento.id} lanzamiento={lanzamiento} />
        ))}
      </div>
    </div>
  );
}

export default App;
