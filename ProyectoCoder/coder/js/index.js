//#region Clases
class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
    toString(){
        return (`${this.nombre}: $${this.precio}`);
    }
}
/*class Carrito{
    carritoProducto = [];
    constructor(){
        this.carritoProducto = [];
    }
    Agregar(producto){
        this.carritoProducto.push(producto);
    }
    Quitar(producto){
        let objetoQuitado = this.carritoProducto.find(x => x === producto);
        carritoProducto.pop(objetoQuitado);
    }
    CalcularPrecio(){
        let precioFinal = 0;       
        return this.carritoProducto.forEach(element => {precioFinal += element.precio});
    }
    Mostrar(){
        let productos = "";
        return this.carritoProducto.forEach(element => {productos += `\n${element.nombre}`});
    }
}*/
//#endregion
//#region Algoritmo
const carritoProducto = [];
function agregar(lista, producto){
    lista.push(producto);
}
function mostrar(lista){
    return string = lista.reduce((string, item) => string += `\n ${item.toString()}`);
}
function calcularPrecio(lista){
    return valor = lista.reduce((valor, item) => valor + item.precio, 0);
}
function pagoCon(x){
    let valorActual = parseFloat(calcularPrecio(carritoProducto));
    if(x === 1){
        return ((valorActual * 10)/100);
    }
    else{
        return ((valorActual * 5)/100); 
    }
} 
function Algoritmo(){
    let opcion = parseInt(prompt("seleccione el producto a añadir a lista de compra \n 1 - Teclado \n 2 - Mouses \n 3 - Memorias \n 4 - Auriculares \n 5 - Finalizar"));
    let listaProducto = [];
    let opcionaux;
    switch (opcion){
        case 1:   
            listaProducto = [new Producto("Alloy Elite 2", 15000), new Producto("Alloy Origins", 17500), new Producto("Alloy FPS RGB", 14000)];   
            opcionaux = parseInt(prompt(`Seleccione para agregar al carrito \n La lista de los productos es: \n 1- ${listaProducto[0].toString()} \n 2- ${listaProducto[1].toString()} \n 3- ${listaProducto[2].toString()} \n 4- Volver al inicio`));
            if(opcionaux<0 && opcionaux>4){
                alert("Número Inválido");
                Algoritmo();
                break;
            }
            else if(opcionaux === 4){
                Algoritmo();
                break;
            }
            else{agregar(carritoProducto, listaProducto[opcionaux - 1]); Algoritmo(); break;}  
        case 2: 
            listaProducto = [new Producto("Pulsefire Raid", 5000), new Producto("Pulsefire Dart", 4500), new Producto("Pulsefire Surge", 7000)];
            opcionaux = parseInt(prompt(`Seleccione para agregar al carrito \n La lista de los productos es: \n 1- ${listaProducto[0].toString()} \n 2- ${listaProducto[1].toString()} \n 3- ${listaProducto[2].toString()} \n 4- Volver al inicio`));
            if(opcionaux<0 && opcionaux>4){
                alert("Número Inválido");
                Algoritmo();
                break;
            }
            else if(opcionaux === 4){
                Algoritmo();
                break;
            }
            else{agregar(carritoProducto, listaProducto[opcionaux - 1]);Algoritmo(); break;}        
        case 3:
            listaProducto = [new Producto("Fury DDR4", 8500), new Producto("Predator DDR4", 9800), new Producto("Impact", 7000)];
            opcionaux = parseInt(prompt(`Seleccione para agregar al carrito \n La lista de los productos es: \n 1- ${listaProducto[0].toString()} \n 2- ${listaProducto[1].toString()} \n 3- ${listaProducto[2].toString()} \n 4- Volver al inicio`));
            if(opcionaux<0 && opcionaux>4){
                alert("Número Inválido");
                Algoritmo();
                break;
            }
            else if(opcionaux === 4){
                Algoritmo();
                break;
            }
            else{agregar(carritoProducto, listaProducto[opcionaux - 1]); Algoritmo(); break;}     
        case 4:
            listaProducto = [new Producto("Cloud Alpha S", 8000), new Producto("CloudX Flight", 6500), new Producto("Cloud Stinger Core", 7000)];
            opcionaux = parseInt(prompt(`Seleccione para agregar al carrito \n La lista de los productos es: \n 1- ${listaProducto[0].toString()} \n 2- ${listaProducto[1].toString()} \n 3- ${listaProducto[2].toString()} \n 4- Volver al inicio`));
            if(opcionaux<0 && opcionaux>4){
                alert("Número Inválido");
                Algoritmo();
                break;
            }
            else if(opcionaux === 4){
                Algoritmo();
                break;
            }
            else{agregar(carritoProducto, listaProducto[opcionaux - 1]); Algoritmo(); break;}     
        case 5: 
            if(carritoProducto.length === 0){
                alert("El carrito está vacío");
                break;
            }
            let metodoPago = parseInt(prompt("Seleccione el metodo de pago: \n 1 - Efectivo \n 2 - Tarjeta"));
            if(metodoPago !== 1 && metodoPago !== 2){alert("Número incorrecto"); break;}
            alert(`Carrito: \n ${mostrar(carritoProducto)} \n\n Descuento: $${pagoCon(metodoPago)} \n Precio Final: $${calcularPrecio(carritoProducto) - pagoCon(metodoPago)}`); break;
        default:
            let opcionaux2 = prompt("Número inválido. \n ¿Desea reintentar? \n\n SI \n NO");
            if(opcionaux2.toUpperCase() === "SI"){
                Algoritmo();
            }
            else{break;};
    }
}
//#endregion

// alert("Bienvenido al primer algoritmo de js del sitio GameZone. Hoy descuento por PRIMERA ENTREGA obligatoria \n Efectivo 10% y Tarjeta 5%");
// Algoritmo();
