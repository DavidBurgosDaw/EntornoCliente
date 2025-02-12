import React from 'react';
import "../assets/css/CrearComponentes.css"; // Importa los estilos CSS

const CrearComponentes = () => {
  return (
    <div className="crear-componentes-container">
      <h1>Creación y Composición de Componentes en React</h1>
      <p>
        En React, las aplicaciones se estructuran en componentes, que son bloques reutilizables 
        de código que encapsulan tanto la lógica como la interfaz de usuario. 
        Un componente puede ser tan pequeño como un botón o tan complejo como una página completa.
      </p>

      <p>
        Los componentes en React son funciones de JavaScript que devuelven elementos JSX, 
        permitiendo definir estructuras visuales de manera declarativa. Veamos un ejemplo:
      </p>

      <pre className="code-block">
        {`function BotonPersonalizado() {
          return (
            <button className="boton">Haz clic aquí</button>
          );
        }`}
      </pre>

      <p>
        Este componente llamado <code>BotonPersonalizado</code> devuelve un botón estilizado. 
        Ahora podemos reutilizarlo dentro de otro componente para construir una interfaz más completa:
      </p>

      <pre className="code-block">
        {`export default function Aplicacion() {
          return (
            <div className="contenedor-app">
              <h1>Bienvenido a nuestra plataforma</h1>
              <BotonPersonalizado />
            </div>
          );
        }`}
      </pre>

      <p>
        Debemos observar que <code>&lt;BotonPersonalizado /&gt;</code> comienza con mayúscula. 
        Es una regla en React escribir los nombres de los componentes con mayúscula para distinguirlos de las etiquetas HTML normales. Esto nos ayuda a organizar mejor el código y a que sea más fácil de entender y mantener.
      </p>

      <h2>¿Por qué usar componentes?</h2>
      <p>
        Los componentes hacen que el código sea más modular, reutilizable y fácil de depurar. 
        Al dividir la interfaz en pequeñas piezas independientes, podemos trabajar en cada parte sin afectar el resto del sistema.
      </p>

      <h2>Recursos adicionales</h2>
      <p>
        La palabra clave <code>export default</code> define el componente principal del archivo, 
        permitiendo su importación en otros archivos dentro de la aplicación. 
        Para más información sobre React y JavaScript, consulta estos recursos:
        <a href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer">
          MDN Web Docs
        </a>{' '} y
        <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">
          JavaScript.info
        </a>.
      </p>
    </div>
  );
};

export default CrearComponentes;
