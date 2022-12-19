import { productoServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-formprod]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const name = document.querySelector("[data-nameprod]").value;
    const imageUrl = document.querySelector("[data-urlprod]").value;
    var price = document.querySelector("[data-priceprod]").value;
    price = "$"+price+".00";
    productoServices
        .agregarProducto(name,imageUrl,price)
        .then(() => {
            console.log(window.location.href = "../screens/agregar_completado.html");
    })
    .catch((err) => console.log(err)) 

})