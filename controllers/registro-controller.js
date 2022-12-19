import { userServices } from "../servicios/usuarios-servicios.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-name]").value;
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    userServices
        .crearCliente(nombre,email,password)
        .then(() => {
            console.log(window.location.href = "../screens/registro_completado.html");
    })
    .catch((err) => console.log(err)) 

})