import { productoServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");


   /* if (id === null) {
        window.location.href("/screens/error.html");
    }*/

    const name = document.querySelector("[data-name]");
    const imageUrl = document.querySelector("[data-imageUrl]");
    const price = document.querySelector("[data-price]");

    try {
        const perfilProducto = await productoServices.detalleProducto(id);
        if (perfilProducto.name && perfilProducto.imageUrl && perfilProducto.price) {
            name.value = perfilProducto.name;
            imageUrl.value = perfilProducto.imageUrl;
            price.value = perfilProducto.price; 
        } else {
            throw new Error();
        }
    } catch (error) {

    }

};

obtenerInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const name = document.querySelector("[data-name]").value;
    const imageUrl = document.querySelector("[data-imageUrl]").value;
    var price = document.querySelector("[data-price]").value;
    price = "$"+price+".00";

    productoServices.actualizarProducto(name, imageUrl, price, id).then(() => {
        window.location.href = "/screens/editar_completado.html"
    })
})