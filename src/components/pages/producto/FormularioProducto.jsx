import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
  crearProductoAPI,
  editarProductoAPI,
  obtenerProductoAPI,
} from '../../../helpers/queris';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FormularioProducto = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegation = useParams();
  useEffect(() => {
    if (editar) {
      cargarDatosProducto();
    }
  }, []);

  const cargarDatosProducto = async () => {
    console.log('formulario');
    try {
      const respuesta = await obtenerProductoAPI(id);
      console.log(respuesta);
      if (respuesta) {
        setValue('nombreProducto', respuesta.nombreProducto);
        setValue('precio', respuesta.precio);
        setValue('categoria', respuesta.categoria);
        setValue('imagen', respuesta.imagen);
        setValue('descripcionAmplia', respuesta.descripcionAmplia);
        setValue('descripcionBreve', respuesta.descripcionBreve);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const productoValidado = async (producto) => {
    console.log(producto);
    if (editar) {
      //Agregar la logica para editar
      console.log('Aqui debo editar');
      const respuesta = editarProductoAPI(producto, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: 'Producto modificado',
          text: `El producto ${producto.nombreProducto} fue modificado correctamente`,
          icon: 'success',
        });
        navegation(`/administrador`);
      } else {
        Swal.fire({
          title: 'Ocurrio un error',
          text: `El producto ${producto.nombreProducto} no pudo ser modificado, intente nuevamente`,
          icon: 'success',
        });
      }
    } else {
      const respuesta = await crearProductoAPI(producto);
      if (respuesta.status === 201) {
        //Se creo el producto
        Swal.fire({
          title: 'Producto creado',
          text: `El producto ${producto.nombreProducto} fue creado correctamente`,
          icon: 'success',
        });
        reset();
      } else {
        Swal.fire({
          title: 'Ocurrio un error',
          text: `El producto ${producto.nombreProducto} no pudo ser creado, intente nuevamente`,
          icon: 'success',
        });
      }
    }
  };
  return (
    <section className='container mainSection'>
      <h1 className='display-4 mt-5'>{titulo}</h1>
      <hr />
      <Form className='my-4' onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className='mb-3' controlId='formNombreProdcuto'>
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ej: Cafe'
            {...register('nombreProducto', {
              required: 'El nombre del producto es obligatorio',
              minLength: {
                value: 2,
                message:
                  'El nombre del producto debe tener como minimo 2 caracteres',
              },
              maxLength: {
                value: 50,
                message:
                  'El nombre del producto debe tener como maximo 20 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPrecio'>
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type='number'
            placeholder='Ej: 50'
            {...register('precio', {
              required: 'El precio es obligatorio',
              min: {
                value: 50,
                message: 'El producto no puede tener un precio menor a 1',
              },
              max: {
                value: 10000,
                message: 'El precio no puede tener un precio mayor a 99999',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formImagen'>
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/'
            {...register('imagen', {
              required: 'El producto debe contener una imagen',
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: 'Ingrese un link valido',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPrecio'>
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register('categoria', {
              required: 'El producto debe pertenecer a una categoria',
            })}
          >
            <option value=''>Seleccione una opcion</option>
            <option value='Infusiones'>Infusiones</option>
            <option value='Batidos'>Batidos</option>
            <option value='dulce'>Dulce</option>
            <option value='salado'>Salado</option>
          </Form.Select>
          <Form.Text className='text-danger'>
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formImagen'>
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ej: Una taza de café suave y aromático.'
            as='textarea'
            {...register('descripcionBreve', {
              required: 'Este campo es obligatorio',
              minLength: {
                value: 5,
                message: 'La descripcion debe tener como minimo un caracter',
              },
              maxLength: {
                value: 50,
                message: 'La descripcion debe tener como maximo 50 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formImagen'>
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día.'
            as='textarea'
            {...register('descripcionAmplia', {
              required: 'Este campo es obligatorio',
              minLength: {
                value: 50,
                message: 'La descripcion debe tener como minimo 50 caracteres',
              },
              maxLength: {
                value: 300,
                message: 'La descripcion debe tener como maximo 150 caracteres',
              },
            })}
          />
          <Form.Text className='text-danger'>
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type='submit' variant='success'>
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
