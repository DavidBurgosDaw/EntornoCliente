import React, { useState } from 'react';
import "../assets/css/MostrarDatos.css"; // Importa los estilos CSS

// Componentes de ejemplo para renderizado condicional
const AdminPanel = () => <div>Panel de Administración</div>;
const LoginForm = () => <div>Formulario de Inicio de Sesión</div>;

const RenderizadoCondicionalYListas = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const products = [
    { title: 'Col', isFruit: false, id: 1 },
    { title: 'Ajo', isFruit: false, id: 2 },
    { title: 'Manzana', isFruit: true, id: 3 },
  ];

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen', // Diferente color para frutas
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div className="mostrar-datos-container">
      <h1>Renderizado Condicional y de Listas en JSX</h1>

      <h2>Renderizado Condicional</h2>
      <p>
        Aquí estamos mostrando el componente <code>AdminPanel</code> si el usuario está
        <strong>loggeado</strong> o el componente <code>LoginForm</code> si no lo está:
      </p>
      <pre className="code-block">
        {`let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;`}
      </pre>

      <div>
        <h3>Estado de Usuario: {isLoggedIn ? 'Loggeado' : 'No loggeado'}</h3>
        <div>{content}</div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
      </div>

      <h2>Renderizado de Listas</h2>
      <p>
        Aquí estamos usando el método <code>map()</code> para transformar un arreglo de productos
        en una lista de elementos:
      </p>
      <pre className="code-block">
        {`const listItems = products.map(product => (
  <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
    {product.title}
  </li>
));`}
      </pre>

      <h3>Lista de Productos</h3>
      <ul>{listItems}</ul>
    </div>
  );
};

export default RenderizadoCondicionalYListas;
