const URL_Productos = import.meta.env.VITE_API_PRODUCTO;

console.log(URL_Productos);

//GET
export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Productos);
    const listaProductos = await respuesta.json();
    console.log(listaProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

//GET devuelve un producto
export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Productos + '/' + id);
    const listaProductos = await respuesta.json();
    console.log(listaProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URL_Productos, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
//PUT - PATCH
export const editarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Productos}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoModificado),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//DELETE
export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Productos}/${id}`, {
      method: 'DELETE',
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//modificar el login cuando tengamos un backend
const userAdmin = {
  mail: 'admin@rollingcoffe.com',
  password: '123Aa$123',
};

export const login = (usuario) => {
  if (
    usuario.mail === userAdmin.mail &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem('usuarioRollingCoffe', JSON.stringify(usuario.mail));
    return true;
  } else {
    return false;
  }
};
