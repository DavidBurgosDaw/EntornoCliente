import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Inicio from "./pages/Inicio";
import CrearComponentes from "./pages/CrearComponentes";
import Estilos from "./pages/Estilos";
import MostrarDatos from "./pages/MostrarDatos";
import Eventos from "./pages/Eventos";
import EstadoYProps from "./pages/EstadoYProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css"
import Condicionales from "./pages/Condicionales";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="crear-componentes" element={<CrearComponentes />} />
          <Route path="estilos" element={<Estilos />} />
          <Route path="mostrar-datos" element={<MostrarDatos />} />
          <Route path="renderizado-condicional" element={<Condicionales />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="estado-y-props" element={<EstadoYProps />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
