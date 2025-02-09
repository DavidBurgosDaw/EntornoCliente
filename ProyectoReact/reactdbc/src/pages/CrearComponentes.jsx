import React from 'react';
import "../assets/css/CrearComponentes.css"; // Importa los estilos CSS

const CrearComponentes = () => {
  return (
    <div className="crear-componentes-container">
      <h1>Crear y Anidar Componentes</h1>
      <p>
        Las aplicaciones de React están hechas a partir de componentes. Un
        componente es una pieza de UI (interfaz de usuario) que tiene su propia
        lógica y apariencia. Un componente puede ser tan pequeño como un botón,
        o tan grande como toda una página.
      </p>

      <p>
        Los componentes de React son funciones de JavaScript que devuelven
        markup (marcado):
      </p>

      <pre className="code-block">
              {`function MyButton() {
        return (
          <button>Soy un botón</button>
        );
      }`}
      </pre>

      

      <p>
        Ahora que has declarado <code>MyButton</code>, puedes anidarlo en otro
        componente:
      </p>

      <pre className="code-block">
              {`export default function MyApp() {
        return (
          <div>
            <h1>Bienvenido a mi aplicación</h1>
            <MyButton/>
          </div>
        );
      }`}
      </pre>

      <p>
        Nota que <code>&lt;MyButton /&gt;</code> empieza con mayúscula. Así es
        como sabes que es un componente de React. Los nombres de los componentes
        de React siempre deben comenzar con mayúscula, mientras las etiquetas HTML
        deben estar en minúsculas.
      </p>

      <h2>Más información</h2>
      <p>
        Las palabras clave <code>export default</code> especifican el componente
        principal en el archivo. Si no estás familiarizado con alguna parte de la
        sintaxis de JavaScript,{' '}
        <a href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer">
          MDN
        </a>{' '}
        y{' '}
        <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">
          javascript.info
        </a>{' '}
        tienen magníficas referencias.
      </p>
    </div>
  );
};

export default CrearComponentes;
