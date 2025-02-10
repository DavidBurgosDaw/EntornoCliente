import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <Header />

      <main className="layout-main text-center mt-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
