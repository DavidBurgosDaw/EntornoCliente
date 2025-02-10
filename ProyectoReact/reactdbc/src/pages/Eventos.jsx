import React, { useState } from "react";
import "../assets/css/Eventos.css";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Hiciste clic {count} veces</button>;
}

const Eventos = () => {
  return (
    <div className="eventos-container">
      <h1>Responder a eventos en React</h1>

      <p>
        En React, puedes responder a eventos declarando funciones controladoras de eventos dentro de tus componentes. Aquí te mostramos cómo hacerlo:
      </p>

      <pre className="code-block">
        {`function MyButton() {
  function handleClick() {
    alert('¡Me hiciste clic!');
  }

  return (
    <button onClick={handleClick}>
      Hazme clic
    </button>
  );
}`}
      </pre>

      <h2>Actualizar la pantalla</h2>
      <p>
        A menudo, querrás que tu componente "recuerde" alguna información y la muestre. Para lograr esto, puedes usar el hook <code>useState</code> de React.
      </p>

      <pre className="code-block">
        {`import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}`}
      </pre>

      <h2>Ejemplo de botones con contadores independientes</h2>
      <pre className="code-block">
        {`import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Contadores que se actualizan separadamente</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}`}
      </pre>

      <h2>Ejemplo práctico</h2>
      <p>
        El siguiente ejemplo tiene dos botones, y cada uno mantiene su propio estado. Si haces clic en un botón, solo el contador de ese botón se incrementará.
      </p>

      <div className="eventos-buttons">
        <MyButton />
        <MyButton />
      </div>
    </div>
  );
};

export default Eventos;
