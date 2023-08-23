import { productosDisponibles } from "./inicio.js";

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]));

document.addEventListener("DOMContentLoaded", () => {
    pintarCarrito();
});

let carrito = JSON.parse(sessionStorage.getItem("carrito"));
const listaCarrito = document.getElementById("items");
const footCarrito = document.getElementById("totales");

export const comprarProducto = (idProducto) => {
    const producto = productosDisponibles.find((producto) => producto.id === idProducto)
    const { id, img, artista, album, precio } = producto
    const productoCarrito = carrito.find((producto) => producto.id === idProducto);
    if (productoCarrito === undefined) {
        const nuevoProductoCarrito = {
            id: id,
            img: img,
            artista: artista,
            album: album,
            precio: precio,
            cantidad: 1
        }
        carrito.push(nuevoProductoCarrito);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
    else {
        const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto);
        carrito[indexProductoCarrito].cantidad++
        carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad;
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"));
};

// const pintarCarrito = () => {
//     carrito.forEach(producto => {
//         let body = document.createElement("tr")
//         body.className = "producto-carrito"
//         body.innerHTML = `
//         <th><img id = "fotoProducto" src = "${producto.img}"></th>
//         <td>${producto.artista}</td>
//         <td>${producto.album}</td>
//         <td>${producto.precio/cantidad}</td>
//         <td>${precio}</td>
//         <td>
//         <button id = "">
//         </td>
//         `
//     });
// };