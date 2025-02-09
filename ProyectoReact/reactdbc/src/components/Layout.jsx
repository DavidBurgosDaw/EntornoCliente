import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      {/* Encabezado */}
      <Header />

      {/* Contenido dinámico (Outlet) */}
      <main className="layout-main text-center mt-4">
        {/* Aquí hago que se vea la página */}
        <Outlet />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Layout;
