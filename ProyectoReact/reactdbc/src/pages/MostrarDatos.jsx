import React from 'react';
import "../assets/css/MostrarDatos.css";

const MostrarDatos = () => {
  const usuario = {
    nombre: 'James Bond',
    imagenUrl: '../assets/images/james-bond-webp',
    tamañoImagen: 100,
  };

  return (
    <div className="mostrar-datos-container">
      <h1>Mostrar información con JSX</h1>

      <p>
        JSX te permite insertar HTML dentro de JavaScript. Utilizando llaves puedes “salir” a JavaScript y mostrar el valor de una variable. Por ejemplo, el siguiente código muestra <code>usuario.nombre</code>:
      </p>

      <pre className="code-block">
        {`return (
  <h1>
    {usuario.nombre}
  </h1>
);`}
      </pre>

      <p>
        También puedes usar JavaScript dentro de los atributos en JSX. En lugar de usar comillas, debes usar llaves. Por ejemplo, <code>className="avatar"</code> asigna la cadena <code>"avatar"</code> como clase CSS, pero{' '}
        <code>src={usuario.imagenUrl}</code> toma el valor de la variable <code>usuario.imagenUrl</code> y lo pasa al atributo <code>src</code>:
      </p>

      <pre className="code-block">
        {`return (
  <img
    className="avatar"
    src={usuario.imagenUrl}
  />
);`}
      </pre>

      <h2>Ejemplo práctico</h2>
      <p>
        A continuación se muestra un ejemplo de cómo puedes mostrar el nombre y la imagen de un usuario utilizando JSX:
      </p>

      <pre className="code-block">
        {`const usuario = {
  nombre: 'Juan Pérez',
  imagenUrl: 'https://i.imgur.com/JtZV5hw.jpg',
  tamañoImagen: 100,
};

export default function Perfil() {
  return (
    <>
      <h1>{usuario.nombre}</h1>
      <img
        className="avatar"
        src={usuario.imagenUrl}
        alt={'Foto de ' + usuario.nombre}
        style={{
          width: usuario.tamañoImagen,
          height: usuario.tamañoImagen
        }}
      />
    </>
  );
}`}
      </pre>

      <div className="ejemplo-avatar">
        <h2>Ejemplo:</h2>

        <h3>Perfil del Usuario</h3>
        <h1>{usuario.nombre}</h1>
        <img
          className="avatar"
          src={usuario.imagenUrl}
          alt={'Foto de ' + usuario.nombre}
          style={{
            width: usuario.tamañoImagen,
            height: usuario.tamañoImagen
          }}
        />
      </div>
    </div>
  );
};

export default MostrarDatos;
