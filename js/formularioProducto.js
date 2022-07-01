

window.onload = function () {
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
}

    let contenedorDatosProducto = function () {
    let id = parseFloat(document.getElementById("idProducto").value);
    let nombre = document.getElementById("nombre").value;
    let presentacion = document.getElementById("presentacionProducto").value;
    let marca = document.getElementById("marcaProducto").value;
    let fechaVencimiento = document.getElementById("fechaVencimientoProducto").value;
    let precio = document.getElementById("precioProducto").value;
    let categoria = parseFloat(document.getElementById("categoriaProducto").value);

    document.contenido.idObtenido.value = id;
    document.contenido.nombreOtenido.value = nombre;
    document.contenido.presentacionObtenida.value= presentacion;
    document.contenido.marcaObtenida = marca;
    document.contenido.fechaVencimientoObtenida.value = fechaVencimiento;
    document.contenido.precioObtenido.value= precio;
    document.contenido.categoriadObtenida.value = categoria};




