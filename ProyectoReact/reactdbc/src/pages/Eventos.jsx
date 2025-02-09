import React, { useState } from 'react';
import "../assets/css/Eventos.css"; // Asegúrate de tener el archivo CSS si lo necesitas

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

      <p>
        ¡Nota que <code>onClick={handleClick}</code> no tiene paréntesis al final! No necesitas llamar a la función controladora de eventos; solo debes pasarla y React la llamará cuando se haga clic en el botón.
      </p>

      <h2>Actualizar la pantalla</h2>
      <p>
        A menudo, querrás que tu componente "recuerde" alguna información y la muestre. Por ejemplo, contar el número de veces que se hace clic en un botón. Para lograr esto, puedes usar el hook <code>useState</code> de React.
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

      <p>
        Al hacer clic en el botón, el contador se actualizará. Este es el ejemplo con estado para llevar el conteo de los clics:
      </p>

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

function MyButton() {
  const [count, setCount] = useState(0);  // Usamos el hook useState aquí para manejar el estado de cada botón.

  function handleClick() {
    setCount(count + 1); // Actualiza el contador de este botón cuando se haga clic.
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}

export default Eventos;
