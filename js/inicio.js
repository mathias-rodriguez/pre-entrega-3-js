// import { productos } from "../db/productos";

import { comprarProducto } from "./carrito.js"
const cardsShop = document.getElementById("cardsShop");
// const verCarrito = document.getElementById("verCarrito");

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    cardsProductos(productosDisponibles);
})

const cardsProductos = (productos) => {
    productos.forEach(producto => {
        let contenido = document.createElement("article");
        contenido.className = "card"
        contenido.innerHTML = `
        <img src="${producto.img}" alt="imagen del producto">
        <div> 
            <h2 class="artista">${producto.artista}</h2>
            <p class="album">${producto.album}</p>
            <p class = "precio">$ ${producto.precio}</p>
            <button id = "btn${producto.id}" class="buy">Buy</button>
        </div>
        `;
        cardsShop.appendChild(contenido);
        const btnComprar = document.getElementById(`btn${producto.id}`)
        btnComprar.addEventListener("click", () => comprarProducto(producto.id));
    });
};