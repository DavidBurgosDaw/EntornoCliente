import React, { useState } from 'react';
import "../assets/css/MostrarDatos.css"; // Importa los estilos CSS

// Componentes personalizados para renderizado condicional
const Dashboard = () => <div>Panel Principal</div>;
const SignInForm = () => <div>Formulario de Acceso</div>;

const RenderizadoCondicionalYListas = () => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  const elementos = [
    { nombre: 'Zapato', esRopa: false, id: 1 },
    { nombre: 'Camisa', esRopa: true, id: 2 },
    { nombre: 'Sombrero', esRopa: true, id: 3 },
  ];

  let vista;
  if (usuarioAutenticado) {
    vista = <Dashboard />;
  } else {
    vista = <SignInForm />;
  }

  const listaElementos = elementos.map(item => (
    <li
      key={item.id}
      style={{
        color: item.esRopa ? 'blue' : 'brown', // Color diferente para prendas y accesorios
      }}
    >
      {item.nombre}
    </li>
  ));

  return (
    <div className="mostrar-datos-container">
      <h1>Ejemplo de Renderizado Condicional y Listas</h1>

      <h2>Renderizado Condicional</h2>
      <p>
        Mostramos el componente <code>Dashboard</code> si el usuario está
        <strong> autenticado</strong> o el componente <code>SignInForm</code> si no lo está:
      </p>
      <pre className="code-block">
        {`let vista;
if (usuarioAutenticado) {
  vista = <Dashboard />;
} else {
  vista = <SignInForm />;
}
return <div>{vista}</div>;`}
      </pre>

      <div>
        <h3>Estado de Usuario: {usuarioAutenticado ? 'Autenticado' : 'No autenticado'}</h3>
        <div>{vista}</div>
        <button onClick={() => setUsuarioAutenticado(!usuarioAutenticado)}>
          {usuarioAutenticado ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
      </div>

      <h2>Renderizado de Listas</h2>
      <p>
        Usamos el método <code>map()</code> para transformar un array de elementos en una lista:
      </p>
      <pre className="code-block">
        {`const listaElementos = elementos.map(item => (
  <li key={item.id} style={{ color: item.esRopa ? 'blue' : 'brown' }}>
    {item.nombre}
  </li>
));`}
      </pre>

      <h3>Lista de Elementos</h3>
      <ul>{listaElementos}</ul>
    </div>
  );
};

export default RenderizadoCondicionalYListas;
