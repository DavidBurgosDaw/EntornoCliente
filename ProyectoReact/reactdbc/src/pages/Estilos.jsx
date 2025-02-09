import React from 'react';
import "../assets/css/Estilos.css"; // Importa los estilos CSS

const Estilos = () => {
  return (
    <div className="estilos-container">
      <h1>Escribir marcado con JSX</h1>
      <p>
        La sintaxis de marcado que viste arriba se llama JSX. Es totalmente
        opcional, pero la mayoría de los proyectos de React usan JSX por la
        comodidad que ofrece. Todas las herramientas que recomendamos para el
        desarrollo local son compatibles con JSX sin ningún tipo de configuración.
      </p>

      <p>
        JSX es más estricto que HTML. Tienes que cerrar etiquetas como <code>&lt;br /&gt;</code>. Tu componente tampoco
        puede devolver múltiples etiquetas de JSX. Debes envolverlas en un padre compartido, como{' '}
        <code>&lt;div&gt;...&lt;/div&gt;</code> o en un envoltorio vacío <code>&lt;&gt;...&lt;/&gt;</code>:
      </p>

      <pre className="code-block">
        {`function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br />¿Cómo vas?</p>
    </>
  );
}`}
      </pre>

      <p>
        Si tienes mucho HTML que convertir a JSX, puedes utilizar un convertidor en línea.
      </p>

      <h2>Añadir estilos</h2>
      <p>
        En React, especificas una clase de CSS con <code>className</code>. Funciona de la misma forma que el atributo{' '}
        <code>class</code> de HTML:
      </p>

      <pre className="code-block">
        {`<img className="avatar" />`}
      </pre>

      <p>
        Luego escribes las reglas CSS para esa clase en un archivo CSS aparte:
      </p>

      <pre className="code-block">
        {`/* In your CSS */
.avatar {
  border-radius: 50%;
}`}
      </pre>

      <p>
        React no prescribe como debes añadir tus archivos CSS. En el caso más simple, añades una etiqueta{' '}
        <code>&lt;link&gt;</code> a tu HTML. Si utilizas una herramienta de construcción o un framework, consulta su
        documentación para saber como añadir un archivo CSS a tu proyecto.
      </p>
    </div>
  );
};

export default Estilos;
