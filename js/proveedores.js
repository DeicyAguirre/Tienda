class Proveedores {
    constructor(id, identificacion, nombre, apellidos, direccion, celular, email, nombreEmpresa, nitEmpresa, lineaProductos){
        this.id=id;
        this.identificacion=identificacion;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.direccion=direccion;
        this.celular=celular;
        this.email=email;
        this.nombreEmpresa=nombreEmpresa;
        this.nitEmpresa=nitEmpresa;
        this.lineaProductos=lineaProductos;
        this.tomarPedido= function(){
            console.log("El proveedor"+ " " + this.nombreEmpresa + " " + " con Nit" + " " + this.nitEmpresa + " " + " tomo el pedido correctamente")
        }
        this.despacharPedido= function(){
            console.log("El proveedor" + this.nombreEmpresa + " con Nit" + this.nitEmpresa + " despacho el pedido correctamente")
        }
        this.entregarPedido= function(){
            console.log("El proveedor" + this.nombreEmpresa + " con Nit" + " " + this.nitEmpresa + " entrego el pedido correctamente")
        }
        this.propiedades= function(){
            console.log(this.id +" "+ this.identificacion + " " + this.nombre + " " + this.apellidos + " " + this.direccion + " " + this.celular + " " + this.email + " " +this.nombreEmpresa + " " + this.nitEmpresa + " " + this.lineaProductos)
        }
    }
  
}
export {Proveedores}
