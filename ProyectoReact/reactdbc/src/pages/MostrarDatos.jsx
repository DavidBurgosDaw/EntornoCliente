import React from 'react';
import "../assets/css/MostrarDatos.css";

const MostrarDatos = () => {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <div className="mostrar-datos-container">
      <h1>Mostrar datos con JSX</h1>

      <p>
        JSX te permite poner marcado dentro de JavaScript. Las llaves te permiten
        “escapar de nuevo” hacia JavaScript de forma tal que puedas incrustar una
        variable de tu código y mostrársela al usuario. Por ejemplo, esto mostrará{' '}
        <code>user.name</code>:
      </p>

      <pre className="code-block">
        {`return (
  <h1>
    {user.name}
  </h1>
);`}
      </pre>

      <p>
        También puedes “escaparte hacia JavaScript” en los atributos JSX, pero
        tienes que utilizar llaves en lugar de comillas. Por ejemplo, <code>className="avatar"</code>
        pasa la cadena <code>"avatar"</code> como la clase CSS, pero{' '}
        <code>src={user.imageUrl}</code> lee el valor de la variable{' '}
        <code>user.imageUrl</code> y luego pasa el valor como el atributo <code>src</code>:
      </p>

      <pre className="code-block">
        {`return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);`}
      </pre>

      <h2>Ejemplo práctico</h2>
      <p>
        Aquí está un ejemplo de cómo puedes mostrar el nombre y la imagen de un usuario usando JSX:
      </p>

      <pre className="code-block">
        {`const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}`}
      </pre>


      <div className='ejemplo-avatar'>
        <h2>Ejemplo:</h2>

        <h3>Perfil del Usuario</h3>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Foto de ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </div>
    </div>
  );
};

export default MostrarDatos;
