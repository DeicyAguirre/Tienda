


let contenedorVendedor = document.getElementById("contenido")
contenedorVendedor.style.visibility = "hidden"
let buttonFormularioProducto = document.getElementById ("formularioProducto")

buttonFormularioProducto.onclick = function(){
    contenedorVendedor.style.visibility = "visible"
}
let cerrarFormulario = document.getElementById("cerrar")
cerrarFormulario.onclick = function () {
    contenedorVendedor.style.visibility= "hidden"
} 


    let contenedorDatosProducto = function () {
    let id = document.getElementById("idProducto").value;
    let nombre = document.getElementById("nombre").value;
    let presentacion = document.getElementById("presentacionProducto").value;
    let marca = document.getElementById("marcaProducto").value;
    let fechaVencimiento = document.getElementById("fechaVencimientoProducto").value;
    let precio = document.getElementById("precioProducto").value;
    let categoria = document.getElementById("categoriaProducto").value;

    let datosFormulario = {}
    datosFormulario.id = id;
    datosFormulario.nombre = nombre;
    datosFormulario.presentacion = presentacion;
    datosFormulario.marca = marca;
    datosFormulario.fechaVencimiento = fechaVencimiento;
    datosFormulario.precio = precio;
    datosFormulario.categoria = categoria;

    alert ("los datos han sido guardados")
    console.log (datosFormulario.id + " " + datosFormulario.nombre + " " + datosFormulario.presentacion + " " + datosFormulario.marca + " " + datosFormulario.fechaVencimiento + " " + datosFormulario.precio + " " + datosFormulario.categoria)

};

let cargar = document.getElementById("cargar")
cargar.onclick = contenedorDatosProducto





