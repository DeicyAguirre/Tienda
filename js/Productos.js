
class Productos {
    constructor (id, nombre, presentacion, marca, fechaVencimiento, precio, categoria){
        this.id= id;
        this.nombre= nombre;
        this.presentacion= presentacion;
        this.marca= marca;
        this.fechaVencimiento= fechaVencimiento;
        this.precio= precio;
        this.categoria= categoria;
        this.ingresarInventario= function(){
            console.log("Ingreso con éxito");
        }
        this.salirInventario= function(){
            console.log("Egreso con éxito");
        }
        this.propiedades= function(){
            console.log(this.id  +" "+ this.nombre +" "+ this.marca +" "+ this.categoria +" "+ this.precio);
        }
        this.verMarca= function(){
            console.log(this.marca);
        }
    }
}
    export { Productos }


    let producto= new Productos(235644, "avena en hojuelas", "250 gr", "Don Pancho", "13/06/2023", 1600, "comida")
    let producto2= new Productos(123156, "arroz", "500 gr", "Diana", "15/06/2023", 1900, "comida")
    let producto3= new Productos(523698, "frijol", "500 gr", "Doña Pepa", "36/24/2023", 5500, "comida")
    let producto4= new Productos(526987, "spaguetti", "250 gr", "Doria", "30/06/2022", 2200, "comida")
    let producto5= new Productos(526395, "atún en aceite", "125 gr", "20/05/2022", 4800, "comida")
    let producto6= new Productos(636595, "media tobillera", "par", "Punto Blanco", "no aplica", 8000, "ropa")
    let producto7= new Productos(859632, "botines", "par", "velez", "No aplica", 275000, "ropa")
    let producto8= new Productos(956598, "jean bota tubo", "unidad", "Studio F", "no aplica", 85000, "ropa")
    let producto9= new Productos(256598, "chaqueta", "unidad", "addidas", "no aplica", 92300, "ropa")
    let producto10= new Productos(856595, "camiseta", "unidad", "basemet", "no aplica", 45000, "ropa")
    let producto11= new Productos(859245, "detergente liquido", "1000 ml", "no aplica", 9000, "aseo")
    let producto12= new Productos(758425, "blanqueador", "500 ml", "no aplica", 5000, "aseo")
    let producto13= new Productos(526584, "ambientador", "120 ml", "esencia", "no aplica", 13000, "aseo")
    let producto14= new Productos(125895, "ambientador para pisos", "2000 ml", "fabuloso", "no aplica", 16000, "aseo")
    let producto15= new Productos(256384, "suavizante ropa", "2000 ml", "suavitel", "no aplica", 18000, "aseo")
    let producto16= new Productos(258745, "lavadora", "unidad", "samsung", "no aplica", 1250000, "electrodomesticos")
    let producto17= new Productos(258745, "freidora", "unidad", "oster", "no aplica", 398000, "electrodomesticos")
    let producto18= new Productos(956852, "batidora", "unidad", "universal", "no aplica", 125000, "electodomesticos")
    let producto19= new Productos(859632, "televisor 50 pul", "unidad", "samsung", "no aplica", 1500300, "electrodomesticos")
    let producto20= new Productos(658475, "nevera", "unidad", "LG", "no aplica", 1800500, "electrodomesticos")
    let producto21= new Productos(532694, "pan tajado", "400 gr", "Bi,bo", "26/07/2022", 3200, "panaderia")
    let producto22= new Productos(569847, "torta negra", "500 gr", "Ramo", "08/08/2023", 12500, "panaderia")
    let producto23= new Productos(658472, "brownie", "80 gr", "Bimbo", "23/05/2022", 1800, "panaderia")
    let producto24= new Productos(245896, "pan integral y semillas", "500 gr", "La espiga", "15/05/2022", 13000, "panaderia")
    let producto25= new Productos(548695, "ponque redondo casero", "400 gr", "Ramo", "20/08/2022", 4200, "panaderia")
    
    //*producto.salirInventario();
   //* producto.ingresarInventario();
    //*producto15.propiedades();

        /*let seccion = [];
        seccion.push(producto);
        seccion.push(producto2);
        seccion.push(producto3);
        seccion.push(producto4);
        seccion.push(producto5);
        seccion.push(producto6);
        seccion.push(producto7);
        seccion.push(producto8);
        seccion.push(producto9);
        seccion.push(producto10);
        seccion.push(producto11);
        seccion.push(producto12);
        seccion.push(producto13);
        seccion.push(producto14);
        seccion.push(producto15);
        seccion.push(producto16);
        seccion.push(producto17);
        seccion.push(producto18);
        seccion.push(producto19);
        seccion.push(producto20);
        seccion.push(producto21);
        seccion.push(producto22);
        seccion.push(producto23);
        seccion.push(producto24);
        seccion.push(producto25);

               
         seccion.forEach(producto => {
            producto.propiedades();
            
        })*/