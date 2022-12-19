const crearCliente = (nombre,email,password) => {
    return fetch("http://localhost:3000/user",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({nombre, email, password, id: uuid.v4()})
})
}


export const userServices = {
    crearCliente
}