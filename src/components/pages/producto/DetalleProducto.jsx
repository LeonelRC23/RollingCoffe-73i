import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="w">
          <img
            className="w-75"
            src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen del producto"
          />
        </div>
        <div className="w-50">
          <h2>Capuchino</h2>
          <p>
            El café americano es una bebida caliente que consiste en un expresso
            diluido con agua caliente, lo que resulta en una taza de café suave
            y aromático. Es una opción popular para aquellos que prefieren un
            café menos intenso que el expresso tradicional. Perfecto para
            disfrutar en cualquier momento del día.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
