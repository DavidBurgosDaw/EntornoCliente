import React, { useState } from "react";
import "../assets/css/Eventos.css";

function BotonContador() {
  const [contador, setContador] = useState(0);

  function manejarClick() {
    setContador(contador + 1);
  }

  return <button onClick={manejarClick}>Has hecho clic {contador} veces</button>;
}

const Eventos = () => {
  return (
    <div className="eventos-container">
      <h1>Gestionar eventos en React</h1>

      <p>
        En React, puedes manejar eventos mediante funciones que se declaran dentro de tus componentes. A continuación, te mostramos cómo hacerlo:
      </p>

      <pre className="code-block">
        {`function BotonAccion() {
  function manejarClick() {
    alert('¡Me hiciste clic!');
  }

  return (
    <button onClick={manejarClick}>
      Haz clic aquí
    </button>
  );
}`}
      </pre>

      <h2>Actualizar el estado de un componente</h2>
      <p>
        A menudo necesitarás que tu componente recuerde información y la actualice en la pantalla. Esto se logra usando el hook <code>useState</code> de React.
      </p>

      <pre className="code-block">
        {`import { useState } from 'react';

      function BotonContador() {
        const [contador, setContador] = useState(0);

        function manejarClick() {
          setContador(contador + 1);
        }

        return (
          <button onClick={manejarClick}>
            Has hecho clic {contador} veces
          </button>
        );
      }`}
            </pre>

            <h2>Ejemplo de botones con contadores independientes</h2>
            <pre className="code-block">
              {`import { useState } from 'react';

      export default function App() {
        return (
          <div>
            <h1>Contadores independientes</h1>
            <BotonContador />
            <BotonContador />
          </div>
        );
      }

      function BotonContador() {
        const [contador, setContador] = useState(0);

        function manejarClick() {
          setContador(contador + 1);
        }

        return (
          <button onClick={manejarClick}>
            Has hecho clic {contador} veces
          </button>
        );
      }`}
      </pre>

      <h2>Ejemplo práctico</h2>
      <p>
        En este ejemplo tenemos dos botones, y cada uno tiene su propio estado. Al hacer clic en uno, solo el contador de ese botón se incrementará.
      </p>

      <div className="eventos-buttons">
        <BotonContador />
        <BotonContador />
      </div>
    </div>
  );
};

export default Eventos;
