import { Productos } from "./Productos.js";
import { Proveedores } from "./proveedores.js";
import { Vendedores } from "./vendedores.js";


    class Tiendas {
        constructor(){
            this.productos= [];
            this.proveedores= [];
            this.vendedores= [];
        }
    }

    let tienda =new Tiendas();
    tienda.productos.push(new Productos(236548, "avena en hojuelas", "250 gr", "Don Pancho", "13/06/2023", 1600, "comida"));
    tienda.productos.push(new Productos(123156, "arroz", "500 gr", "Diana", "15/06/2023", 1900, "comida"));
    tienda.productos.push(new Productos(523698, "frijol", "500 gr", "Doña Pepa", "36/24/2023", 5500, "comida"));
    tienda.productos.push(new Productos(526987, "spaguetti", "250 gr", "Doria", "30/06/2022", 2200, "comida"));
    tienda.productos.push(new Productos(526395, "atún en aceite", "125 gr", "20/05/2022", 4800, "comida"));
    tienda.productos.push(new Productos(636595, "media tobillera", "par", "Punto Blanco", "no aplica", 8000, "ropa"));
    tienda.productos.push(new Productos(859632, "botines", "par", "velez", "No aplica", 275000, "ropa"));
    tienda.productos.push(new Productos(956598, "jean bota tubo", "unidad", "Studio F", "no aplica", 85000, "ropa"));
    tienda.productos.push(new Productos(256598, "chaqueta", "unidad", "addidas", "no aplica", 92300, "ropa"));
    tienda.productos.push(new Productos(856595, "camiseta", "unidad", "basemet", "no aplica", 45000, "ropa"));
    tienda.productos.push(new Productos(859245, "detergente liquido", "1000 ml", "no aplica", 9000, "aseo"));
    tienda.productos.push(new Productos(758425, "blanqueador", "500 ml", "no aplica", 5000, "aseo"));
    tienda.productos.push(new Productos(526584, "ambientador", "120 ml", "esencia", "no aplica", 13000, "aseo"));
    tienda.productos.push(new Productos(125895, "ambientador para pisos", "2000 ml", "fabuloso", "no aplica", 16000, "aseo"));
    tienda.productos.push(new Productos(256384, "suavizante ropa", "2000 ml", "suavitel", "no aplica", 18000, "aseo"));
    tienda.productos.push(new Productos(258745, "lavadora", "unidad", "samsung", "no aplica", 1250000, "electrodomesticos"));
    tienda.productos.push(new Productos(258745, "freidora", "unidad", "oster", "no aplica", 398000, "electrodomesticos"));
    tienda.productos.push(new Productos(956852, "batidora", "unidad", "universal", "no aplica", 125000, "electodomesticos"));
    tienda.productos.push(new Productos(859632, "televisor 50 pul", "unidad", "samsung", "no aplica", 1500300, "electrodomesticos"));
    tienda.productos.push(new Productos(658475, "nevera", "unidad", "LG", "no aplica", 1800500, "electrodomesticos"));
    tienda.productos.push(new Productos(532694, "pan tajado", "400 gr", "Bi,bo", "26/07/2022", 3200, "panaderia"));
    tienda.productos.push(new Productos(569847, "torta negra", "500 gr", "Ramo", "08/08/2023", 12500, "panaderia"));
    tienda.productos.push(new Productos(658472, "brownie", "80 gr", "Bimbo", "23/05/2022", 1800, "panaderia"));
    tienda.productos.push(new Productos(245896, "pan integral y semillas", "500 gr", "La espiga", "15/05/2022", 13000, "panaderia"));
    tienda.productos.push(new Productos(548695, "ponque redondo casero", "400 gr", "Ramo", "20/08/2022", 4200, "panaderia"));

    tienda.proveedores.push(new Proveedores(758965, 1048849300, "Danna Salomé", "Sacistán Aguirre", "Calle 12#12-43", 3212365847, "salitosastan@gmail.com", "Distribuidora El Maná", 9005632985, "Comida"));
    tienda.proveedores.push(new Proveedores(6589547, 65985632, "Juan Manuel", "Montañez Riaño", "Carrera 15#56-96", 3205698545, "juanmanuelmontañez@gmail.com", "Comercializadora El Bodegon", 900856231, "Panadería"));
    tienda.proveedores.push(new Proveedores(2026974, 1046958632, "Erika Milena", "Castañeda Mora", "Calle 25#96-85", 3118963524, "erikamilenacastañeda@gmail.com", "Surti Deco", 9002153658, "ElectodomésticosS"));
    tienda.proveedores.push(new Proveedores(2057894, 1050632874, "Pedo Antonio", "Romero Pineda", "Calle 56#6-96", 3126548521, "pedroromero@gmail.com", "Confecciones Mileny", 9002356985, "Ropa"));
    tienda.proveedores.push(new Proveedores(3265812, 80452163, "Nelsón Augusto", "Florez Medina", "Carrera 9#63-96", 3152648569, "nelsonaugustoflorez@gmail.com", "Distribuidora La campana", 9002356872, "Aseo"));
    tienda.proveedores.push(new Proveedores(9658742, 1112365985, "Ana Elizabeth", "Castillo Moreno", "Calle 15#46-86", 3215698532, "anaelizabethcastillo@gmail.com", "Comercializadora El Gran Buque", 9006325789, "aseo"));
    tienda.proveedores.push(new Proveedores(8565235, 1226547856, "Cristina Maria", "Alfonso Daza", "Carrera 7#89-96", 3215698545, "cristianalfonso@gmail.com", "Moda al Día", 9005632985, "Ropa"));
    tienda.proveedores.push(new Proveedores(1021458, 1075865236, "Maria Fernanda", "Vanegas Mendez", "Calle 9-86-95", 3225639587, "mariafernandavanegas@gmail.com", "La Espiga", 90000632598, "Panadería"));
    tienda.proveedores.push(new Proveedores(9653254, 693254785, "Manuel Rodrigo", "Sanchez Rodriguez", "Carrera 9#45-98", 3188632595, "manuelrodrigosanchez@gmail.com", "Electro Max", 9000625489, "Electrodomésticos"));
    tienda.proveedores.push(new Proveedores(5263548, 1047563856, "David Esteban", "Hernandez Castro", "Calle 8#89-63", 3205632745, "davidestebanhernandez@gmail.com", "La Despensa", 90000315624, "Comida"));

    tienda.vendedores.push(new Vendedores(758965, 1048895632, "Monica Manuela", "Suarez Montejo", "Calle 95#96-78", 3215698547, "monicasuarez@gmail.com"));
    tienda.vendedores.push(new Vendedores(265889, 96853261, "Sandra Marlen", "Grisales Mojica", "Calle 121#63-54", 3216359584, "sandramarlegrisales@gmail.com"));
    tienda.vendedores.push(new Vendedores(896542, 1049562314, "Juan Carlos", "Pedreros Sarmiento", "Carrera 14#63-54", 3225698745, "juancarlospedreros@gmail.com"));
    tienda.vendedores.push(new Vendedores(325684, 1026352856, "Jorge Enrique", "Martin Salamanca", "Carrera 25#67-85", 3105789461, "jorgeenriquemartin@gmail.com"));
    tienda.vendedores.push(new Vendedores(125489, 1124563895, "Luisa Juliana", "Avila Celis", "Calle 52#63-85", 3159632587, "luisajulianaavila@gmail.com"));
    tienda.vendedores.push(new Vendedores(425896, 1025698525, "Cristian Daniel", "Higuera Mejia", "Carrera 135#96-84", 3208956321, "cristiandanielhiguera@gmail.com"));
    tienda.vendedores.push(new Vendedores(256987, 1012635248, "Blanca Stella", "Zapata Dominguez", "Calle 78#96-85", 3189634585, "blancastellazapata@gmail.com"));
    tienda.vendedores.push(new Vendedores(963254, 1025954365, "Maria Daniela", "Bonilla Ariza", "Carrera 16#25-95", 3179856341, "mariadanielabonilla@gmail.com"));
    tienda.vendedores.push(new Vendedores(956214, 1136654852, "Claudia Patricia", "Reyes Cristancho", "Calle 35#56-85", 3117896541, "claudiapatriciareyes@gmail.com"));
    tienda.vendedores.push(new Vendedores(456328, 1047852365, "Maria Paula", "Morales Martin", "Carrera 9#85-63", 3106548596, "mariapaulamorales@gmail.com"));


    tienda.proveedores[3].tomarPedido();
    tienda.productos[6].ingresarInventario();
    tienda.vendedores[4].facturar();
    tienda.vendedores[1].vender();

    tienda.vendedores.forEach(vendedor => {
        vendedor.propiedades();//
        
    });

    tienda.productos.forEach(producto=> {
        console.log(producto.marca)
    });

    tienda.productos.forEach(producto=>{
        producto.verMarca();
    })

    export { tienda}

   

   


