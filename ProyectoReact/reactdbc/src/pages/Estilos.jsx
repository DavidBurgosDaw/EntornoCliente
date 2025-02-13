import React from 'react';
import "../assets/css/Estilos.css"; // Importa los estilos CSS

const Estilos = () => {
  return (
    <div className="estilos-container">
      <h1>Trabajando con JSX</h1>
      <p>
        JSX es una forma de escribir código en React que se parece mucho a HTML, pero con algunas reglas adicionales. 
        Aunque es opcional, casi todos los proyectos de React optan por usar JSX porque facilita la construcción de la interfaz.
      </p>

      <p>
        A diferencia de HTML, en JSX se deben seguir ciertas reglas: por ejemplo, todas las etiquetas deben cerrarse, 
        como <code>&lt;br /&gt;</code>, y si deseas devolver varios elementos, éstos deben estar contenidos dentro de un solo contenedor, 
        como un <code>&lt;div&gt;</code> o un fragmento vacío <code>&lt;&gt;&lt;/&gt;</code>.
      </p>

      <pre className="code-block">
        {`function PerfilUsuario() {
  return (
    <>
      <h2>Perfil del Usuario</h2>
      <p>
        ¡Hola, bienvenido a tu perfil!<br />Esperamos que disfrutes navegando.
      </p>
    </>
  );
}`}
      </pre>

      <p>
        Si necesitas convertir una gran cantidad de HTML a JSX, existen herramientas en línea que pueden ayudarte con ese proceso.
      </p>

      <h2>Estilizando componentes en React</h2>
      <p>
        En React, para asignar una clase CSS a un elemento, usamos la propiedad <code>className</code> en lugar de <code>class</code>. 
        Esto se debe a que <code>class</code> es una palabra reservada en JavaScript. Así, definimos:
      </p>

      <pre className="code-block">
        {`<div className="caja-destacada">Contenido de ejemplo</div>`}
      </pre>

      <p>
        Luego, en tu archivo CSS, puedes definir los estilos para esa clase, por ejemplo:
      </p>

      <pre className="code-block">
        {`/* Archivo Estilos.css */
        .caja-destacada {
          padding: 20px;
          background-color: #e0f7fa;
          border-radius: 10px;
        }`}
      </pre>

      <p>
        React no dicta una única forma de incluir tus archivos de estilo. En aplicaciones simples, puedes enlazar el CSS directamente en el HTML 
        o importarlo en tus componentes. Si utilizas herramientas avanzadas o frameworks, revisa la documentación correspondiente para elegir la mejor opción.
      </p>
    </div>
  );
};

export default Estilos;
