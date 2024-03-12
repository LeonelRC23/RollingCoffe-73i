import { Navigate } from 'react-router';

const RutasProtegidas = ({ children }) => {
  //dada alguna logica mostrar las rutas del admin
  const administrador =
    JSON.parse(sessionStorage.getItem('usuarioRollingCoffe')) || null;
  //no hay usuario logueado
  if (!administrador) {
    //si no es admin
    return <Navigate to={'/login'}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
