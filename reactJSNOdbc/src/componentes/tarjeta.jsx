import React from 'react';

const Tarjeta = ({ lanzamiento }) => {
  console.log(lanzamiento);

  const imagenUrl = lanzamiento?.links?.patch?.small;  // Imagen por defecto si no existe
  const nombreLanzamiento = lanzamiento?.name || 'Nombre no disponible';  // Nombre por defecto si no existe
  const fechaLanzamiento = lanzamiento?.date_utc ? new Date(lanzamiento.date_utc).toLocaleDateString() : 'Fecha no disponible';
  const estadoLanzamiento = lanzamiento?.success ? "✅ Éxito" : "❌ Fallido";  // Estado por defecto si no existe

  return (
    <div className="card">
      <img
        src={imagenUrl}
        alt={nombreLanzamiento}
      />
      <h3>{nombreLanzamiento}</h3>
      <p>
        <strong>Fecha:</strong> {fechaLanzamiento}
      </p>
      <p>
        <strong>Estado:</strong>{" "}
        {estadoLanzamiento}
      </p>
    </div>
  );
};

export default Tarjeta;
