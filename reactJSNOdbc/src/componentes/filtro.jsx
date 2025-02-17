import React from 'react';

const Filtro = ({ filtros, setFiltros }) => {
  const manejarCambioNombre = (e) => {
    setFiltros({ ...filtros, name: e.target.value });  // Comprueba el filtro de nombre
  };

  const manejarCambioEstado = (e) => {
    setFiltros({ ...filtros, status: e.target.value });  // Commprueba el filtro de estado
  };

  const manejarCambioRecientes = (e) => {
    setFiltros({ ...filtros, recent: e.target.checked });  // Comprueba el filtro de "más recientes"
  };

  return (
    <div className="filtros">
      <label>
        Buscar: 
        <input type="text" value={filtros.name} onChange={manejarCambioNombre} placeholder="Nombre del lanzamiento..."/>
      </label>

      <label>
        Estado:
        <select value={filtros.status} onChange={manejarCambioEstado}>
          <option value="todos">Todos</option>
          <option value="exito">Exitosos</option>
          <option value="fallido">Fallidos</option>
        </select>
      </label>

      <label>
        Más recientes:
        <input type="checkbox" checked={filtros.recent} onChange={manejarCambioRecientes}/>
      </label>
    </div>
  );
};

export default Filtro;
