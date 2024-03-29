import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/coffee_Logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    //limpiar sessionStorage
    sessionStorage.removeItem('usuarioRollingCoffe');
    //Actualizar el state
    setUsuarioLogeado('');
    navegacion('/');
  };
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            alt='Logo de RollingCoffee'
            className='img-fluid'
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink end className='nav-link' to='/'>
              Inicio
            </NavLink>
            {usuarioLogeado !== '' ? (
              <>
                <NavLink end className='nav-link' to='/administrador'>
                  Administrador
                </NavLink>
                <Button className='nav-link' variant='link' onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink end className='nav-link' to='/registro'>
                  Registro
                </NavLink>
                <NavLink end className='nav-link' to='/login'>
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
