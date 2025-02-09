import React, { useState } from 'react';
import "../assets/css/EstadoYProps.css"; // Asegúrate de tener el archivo CSS correcto para este componente

const EstadoYProps = () => {
  return (
    <div className="eventos-container">
      <h1>El uso de los Hooks</h1>

      <p>
        Las funciones que comienzan con <code>use</code> se llaman Hooks. <code>useState</code> es un Hook nativo dentro de React. Puedes encontrar otros Hooks nativos en la referencia de la API de React. También puedes escribir tus propios Hooks mediante la combinación de otros existentes.
      </p>

      <h2>Los Hooks son más restrictivos que las funciones regulares</h2>
      <p>
        Solo puedes llamar a los Hooks en el primer nivel de tus componentes (u otros Hooks). Si quisieras utilizar <code>useState</code> en una condicional o en un bucle, extrae un nuevo componente y ponlo ahí.
      </p>

      <h2>Compartir datos entre componentes</h2>
      <p>
        En el ejemplo anterior, cada <code>MyButton</code> tenía su propio <code>count</code> independiente. Sin embargo, a menudo necesitas que los componentes compartan datos y se actualicen siempre en conjunto.
      </p>

      <h3>Diagrama del estado compartido</h3>
      <p>
        Para hacer que ambos componentes <code>MyButton</code> muestren el mismo <code>count</code> y se actualicen juntos, necesitas mover el estado de los botones individuales "hacia arriba" al componente más cercano que los contiene a todos, en este caso, <code>EstadoYProps</code>.
      </p>

      <pre className="code-block">
        {`// Este es el código de EstadoYProps y MyButton:

import { useState } from 'react';

function EstadoYProps() {
  const [count, setCount] = useState(0); // Declaración del estado count

  // Función para actualizar el contador
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contadores que se actualizan juntos</h1>
      {/* Los botones comparten el mismo estado count y el evento onClick */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Hiciste clic {count} veces
    </button>
  );
}`}
      </pre>

      <p>
        Al mover el estado hacia arriba, lo compartimos entre los componentes <code>MyButton</code>, y así ambos botones se actualizan cuando haces clic en cualquiera de ellos.
      </p>

      <div className="eventos-buttons">
        <EstadoYProps /> {/* Aquí se muestra el componente EstadoYProps */}
      </div>
    </div>
  );
};
