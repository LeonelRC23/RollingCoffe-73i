import { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { obtenerProductoAPI } from '../../helpers/queris';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const [producto, setProducto] = useState('');
  const { id } = useParams();
  useEffect(() => {
    obtenerProducto();
  }, []);
  const obtenerProducto = async () => {
    const respuesta = await obtenerProductoAPI(id);
    setProducto(respuesta);
  };
  return (
    <Container className='my-3 mainSection'>
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img variant='top' src={producto.imagen} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className='primary-font'>
                {producto.nombreProducto}
              </Card.Title>
              <hr />
              <Card.Text>
                {producto.descripcionAmplia}
                <br />
                <br />
                <span className='primary-font fw-semibold '>
                  Categoria:
                </span>{' '}
                {producto.categoria}
                <br className='mb-3' />
                <span className='primary-font fw-semibold '>
                  Precio: ${producto.precio}
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
