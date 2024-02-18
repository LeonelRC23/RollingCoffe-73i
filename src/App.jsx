import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/producto/DetalleProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route
          exact
          path="/"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
