
const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
        respuesta.json());
};

const agregarProducto = (name,imageUrl,price) => {
    return fetch("http://localhost:3000/producto",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({name, imageUrl, price, id: uuid.v4()})
});
};

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    });

};

const actualizarProducto = (name, imageUrl, price, id) => {
    console.log(name);
    return fetch(`http://localhost:3000/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imageUrl, price}),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };

export const productoServices = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};