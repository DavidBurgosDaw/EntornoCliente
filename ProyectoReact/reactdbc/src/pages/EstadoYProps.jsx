import React, { useState } from "react";
import "../assets/css/EstadoYProps.css";
import sharingDataParent from "../assets/images/sharing_data_parent.webp";
import sharingDataParentClicked from "../assets/images/sharing_data_parent_clicked.webp";

const EstadoYProps = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="estilos-container">
      <h1>El uso de los Hooks</h1>

      <p>
        Las funciones que comienzan con <code>use</code> se llaman Hooks.{" "}
        <code>useState</code> es un Hook nativo dentro de React. Puedes encontrar otros Hooks nativos en la referencia de la API de React. También puedes escribir tus propios Hooks mediante la combinación de otros existentes.
      </p>

      <h2>Los Hooks son más restrictivos que las funciones regulares</h2>
      <p>
        Solo puedes llamar a los Hooks en el primer nivel de tus componentes (u otros Hooks). Si quisieras utilizar <code>useState</code> en una condicional o en un bucle, extrae un nuevo componente y ponlo ahí.
      </p>

      <h2>Compartir datos entre componentes</h2>
      <p>
        En el ejemplo anterior, cada <code>MyButton</code> tenía su propio <code>count</code> independiente. Sin embargo, a menudo necesitas que los componentes compartan datos y se actualicen siempre en conjunto.
      </p>

      <div className="diagram-container">
        <div className="diagram">
          <h3>Diagrama del estado compartido</h3>
          <img
            src={sharingDataParent}
            alt="Estado inicial de los botones"
            className="diagram-img"
          />
          <p>Inicialmente, cada estado <code>count</code> de <code>MyButton</code> es 0.</p>
        </div>

        <div className="diagram">
          <img
            src={sharingDataParentClicked}
            alt="Estado después de hacer clic"
            className="diagram-img"
          />
          <p>Cuando se actualiza el estado en el componente padre, ambos botones reflejan el nuevo valor.</p>
        </div>
      </div>

      <pre className="code-block">
        {`import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contadores que se actualizan juntos</h1>
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

      <p>Al mover el estado hacia arriba, lo compartimos entre los componentes <code>MyButton</code>, y así ambos botones se actualizan cuando haces clic en cualquiera de ellos.</p>

      <div className="button-container">
        <button onClick={handleClick}>Hacer clic para aumentar</button>
        <p>Contador compartido: {count}</p>
      </div>
    </div>
  );
};

export default EstadoYProps;
