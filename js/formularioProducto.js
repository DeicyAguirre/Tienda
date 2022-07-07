import { Productos } from "./Productos.js";
import { tienda } from "./Tienda.js";

window.onload = function() {
    let contenedorVendedor = document.getElementById("contenido")
    contenedorVendedor.style.visibility = "visible"
    let buttonFormularioProducto = document.getElementById("formularioProducto")

    buttonFormularioProducto.onclick = function() {
        contenedorVendedor.style.visibility = "visible"
    }
    let cerrarFormulario = document.getElementById("cerrar")
    cerrarFormulario.onclick = function() {
        contenedorVendedor.style.visibility = "hidden"
    }
}

let contenedorDatosProducto = function() {
    let id = parseFloat(document.getElementById("idProducto").value);
    let nombre = document.getElementById("nombre").value;
    let presentacion = document.getElementById("presentacionProducto").value;
    let marca = document.getElementById("marcaProducto").value;
    let fechaVencimiento = document.getElementById("fechaVencimientoProducto").value;
    let precio = document.getElementById("precioProducto").value;
    let categoria = parseFloat(document.getElementById("categoriaProducto").value);

    let nuevoProductoCargado = new Productos(id, nombre, presentacion, marca, fechaVencimiento, precio, categoria);
    tienda.productos.push(nuevoProductoCargado);
    console.log(tienda.productos.pop());
    tienda.productos.forEach(element => {

    });
};
let cargar = document.getElementById("cargar");
cargar.onclick = contenedorDatosProducto;