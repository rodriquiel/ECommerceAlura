const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    if (email.length > 5 && password.length > 5) {
    window.location.href = "../screens/listado_productos.html";
  }

})