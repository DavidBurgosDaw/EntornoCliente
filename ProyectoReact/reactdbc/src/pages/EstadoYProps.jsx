import React, { useState } from "react";
import "../assets/css/EstadoYProps.css";

const EstadoYProps = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="estilos-container">
      <h1>Uso de Hooks en React</h1>

      <p>
        En React, los Hooks son funciones especiales que permiten manejar estado y otras características sin necesidad de escribir una clase. Uno de los más utilizados es <code>useState</code>, que nos permite agregar un estado local a nuestros componentes funcionales.
      </p>

      <h2>Reglas para usar Hooks</h2>
      <p>
        Los Hooks deben ser llamados en el nivel superior del componente y nunca dentro de condicionales o bucles. Si necesitas usar <code>useState</code> en una estructura condicional, considera extraerlo en un nuevo componente.
      </p>

      <h2>Compartir estado entre componentes</h2>
      <p>
        En algunos casos, múltiples componentes necesitan acceder y actualizar un mismo estado. En estos casos, movemos el estado a un componente superior y lo pasamos como prop a los componentes que lo necesitan.
      </p>

      <pre className="code-block">
        {`import { useState } from 'react';

export default function Aplicacion() {
  const [contador, setContador] = useState(0);

  function manejarClick() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Botones sincronizados</h1>
      <Boton contador={contador} manejarClick={manejarClick} />
      <Boton contador={contador} manejarClick={manejarClick} />
    </div>
  );
}

function Boton({ contador, manejarClick }) {
  return (
    <button onClick={manejarClick}>
      Clics: {contador}
    </button>
  );
}`}
      </pre>

      <p>Gracias a esta estructura, ambos botones están sincronizados y se actualizan juntos cuando se hace clic en cualquiera de ellos.</p>

      <div className="button-container">
        <button onClick={incrementarContador}>Incrementar contador</button>
        <p>Valor actual del contador: {contador}</p>
      </div>
    </div>
  );
};

export default EstadoYProps;
