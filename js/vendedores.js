   class Vendedores {
    constructor(id, identificacion, nombre, apellidos, direccion, celular, email){
        this.id=id;
        this.identificacion=identificacion;
        this.nombre=nombre;
        this.apellidos= apellidos
        this.direccion=direccion;
        this.celular=celular;
        this.email=email;
        this.vender= function(){
            console.log("Mi venta diaria");
        }
        this.facturar= function(){
            console.log("El vendedor " + this.nombre + " " + this.apellidos + " realizo factura con éxito");

        }
        this.propiedades= function(){
            console.log(this.id + " "+ this.identificacion + " "+ this.nombre + " "+ this.celular)
        }

    }   

}


//*let vendedor = new Vendedores(123564, 1048849300, "Danna Salome Sacristan Aguirre", "Calle 12 #12-43", 31125649586, "salito@gmail.com")
//*let vendedor2= new Vendedores(423564, 65987489, "Maria Camila Guerra Bohorquez", "Carrera 15 #23-56", 3205698745, "camilabohoe23gmail.com")
//*let vendedor3= new Vendedores(123569, 1048849632, "Juan Camilo Bernal Ruiz", "Calle 25 # 13-69", 3126958642, "juancb@gmail.com")
//*let vendedor4= new Vendedores(645587, 45963254, "Andrea Jimena Gonzalez Peña", "Calle 24 #36-89", 3156326548, "andreagonzalez@gmail.com")
//*let vendedor5= new Vendedores(563254, 1046965852, "Carmen Amalia Reyes Perez", "Carrera 9 #78-89", "amalia123@gmail.com")
//*let vendedor6= new Vendedores(563225, 78632954, "Juanita Ramos Olmos", "Carrera 5 #56-96", 3152698563, "juanitaramos@gmail.com")//*
//*console.log(vendedor.id + " "+ vendedor.identificacion + " "+ vendedor.nombre + " "+ vendedor.celular);
 //*vendedor5.atender();
 //*vendedor6.propiedades();

    //*let talentoHumano=[];
    //*talentoHumano.push(vendedor);
    //*talentoHumano.push(vendedor2);
    //*talentoHumano.push(vendedor3);
    //*talentoHumano.push(vendedor4);
    //*talentoHumano.push(vendedor5);
    //*talentoHumano.push(vendedor6);
    //*talentoHumano.forEach(vendedor=>{
        //*vendedor.propiedades();
    //*});

export { Vendedores }


