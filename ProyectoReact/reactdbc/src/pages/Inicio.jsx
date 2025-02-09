import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/inicio.css'; // Asegúrate de importar el CSS

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="inicio-container">
      {/* Header */}
      <header className="inicio-header">
        <div className="container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            className="inicio-logo"
          />
          <h1 className="inicio-title">Guía de React</h1>
          <h2 className="inicio-subtitle">Tu recurso para aprender React de forma fácil y práctica</h2>
        </div>
      </header>

      <div className="container">
        {/* Sección de bienvenida */}
        <div className="bienvenida">
          <h2>Bienvenido a la Documentación de React</h2>
          <p>
            En esta guía, aprenderás cómo empezar a usar React, uno de los frameworks más populares para crear aplicaciones web. 
            Aquí encontrarás ejemplos, tutoriales y todo lo necesario para comenzar a desarrollar con React.
          </p>
        </div>

        {/* Sección de botones verticales */}
        <h3>¿Qué aprenderás?</h3>
        <div className="d-flex flex-column botones">
          
          <Button className="btn-blue" style={{ marginBottom: '10px' }} onClick={() => navigate("/crear-componentes")}>
            Crear Componentes
          </Button>
          <Button className="btn-blue" style={{ marginBottom: '10px' }} onClick={() => navigate("/estilos")}>
            Estilos
          </Button>
          <Button className="btn-blue" style={{ marginBottom: '10px' }} onClick={() => navigate("/mostrar-datos")}>
            Mostrar Datos
          </Button>
          <Button className="btn-blue" style={{ marginBottom: '10px' }} onClick={() => navigate("/renderizado-condicional")}>
            Condicionales
          </Button>
          <Button className="btn-blue" style={{ marginBottom: '10px' }} onClick={() => navigate("/eventos")}>
            Eventos
          </Button>
          <Button className="btn-blue" style={{ marginBottom: '10px' }} onClick={() => navigate("/estado-y-props")}>
            Estado y Props
          </Button>
        </div>

       
      </div>
    </div>
  );
};

export default Inicio;
