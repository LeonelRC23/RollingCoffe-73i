import { Container, Row } from 'react-bootstrap';
import CardProducto from './producto/CardProducto';
import { useEffect, useState } from 'react';
import { leerProductosAPI } from '../../helpers/queris';

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    traerProductos();
  }, []);
  const traerProductos = async () => {
    const respuesta = await leerProductosAPI();
    setProductos(respuesta);
  };
  return (
    <section className='mainSection'>
      <img
        className='banner'
        src='https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg'
        alt='fondo cafe'
      />
      <Container className='mt-5'>
        <h1 className='display-4'>Nuestros Productos</h1>
        <hr />

        <Row>
          {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
