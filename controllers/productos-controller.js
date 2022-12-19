import { productoServices } from "../servicios/productos-servicios.js";

const productoNuevo = (name, price, imageUrl, id) =>{
    const card = document.createElement("div");
    const URLactual = window.location.pathname;
    if (URLactual == "/screens/listado_productos.html") { 
        var contenido = `
        <img class="card__imagen" src=${imageUrl} alt="Producto 1">
        <h2 class="card__nombre">${name}</h2>
        <h3 class="card__precio">${price}</h3>
        <section class="card__botones">
        <a href="editar.html?id=${id}"><button class="editar__boton" type="submit" id=${id}>Editar</button></a>
        <button class="eliminar__boton" type="submit" id=${id}>Eliminar</button>
        </section>
        ` 
        }
        else { var contenido =`
        <img class="card__imagen" src=${imageUrl} alt="Producto 1">
        <h2 class="card__nombre">${name}</h2>
        <h3 class="card__precio">${price}</h3>
        <a href=""><h4 class="card__verProducto">Ver producto</h4></a>
        `
        }
    console.log(contenido);    
    card.innerHTML = contenido;
    const botonElim = card.querySelector(".eliminar__boton");
    botonElim.addEventListener("click", () => {
        const id = botonElim.id
        productoServices.eliminarProducto(id).then(() => {

        }).catch(() => alert("Ocurrio un error. Intente mas tarde."))
    })
    card.classList.add("card"); 
    return card
}

const producto = document.querySelector("[data-productos]");

const render = async() =>{
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(element => {
            producto.appendChild(productoNuevo(element.name,element.price,element.imageUrl,element.id))
        });
    }
    catch(error){
        console.log(error);
    }
} 

render();