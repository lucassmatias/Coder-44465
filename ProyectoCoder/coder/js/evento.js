//#region CLASES
class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
    toString(){
        return (`${this.nombre}: $${this.precio}`);
    }
}
class Usuario{
    constructor(nombre, contraseña){
        this.nombre = nombre;
        this.contraseña = contraseña;
    }
}
function mostrar(lista){
    return string = lista.reduce((string, item) => string += `\n${item.toString()}`);
}
function calcularPrecio(lista){
    return valor = lista.reduce((valor, item) => valor + item.precio, 0);
}
//#endregion
//#region Evento CARRITO
//DOM
const Carrito = [];
let eCarrito = document.getElementById("carrito");
let eBoton1 = document.getElementById("boton1");
let eBoton2 = document.getElementById("boton2");
let eBoton3 = document.getElementById("boton3");
let eLista = document.getElementById("listCarrito");
let eCuadro = document.getElementById("CuadroCarrito");
let visible = false;
let eTotal = document.getElementById("listCarritoTotal");
//Eventos TOASTIFY AL AGREGAR UN PRODUCTO AL CARRITO
eBoton1.addEventListener("click", () => {
    carrito.src = "/imagenes/index/cart-plus-fill.svg";
    Carrito.push(new Producto("Alloy Elite 2", 15000));
    Toastify({
        text: "Se agregó Alloy Elite 2 al carrito",     
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #FF5353, #FF1919)",
          },  
        className: "toastify"
        }).showToast();
    RefrescarCarrito();
})
//Eventos TOASTIFY AL AGREGAR UN PRODUCTO AL CARRITO
eBoton2.addEventListener("click", () => {
    carrito.src = "/imagenes/index/cart-plus-fill.svg";
    Carrito.push(new Producto("Alloy Origins", 18500));
    Toastify({
        text: "Se agregó Alloy Origins al carrito",     
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #FF5353, #FF1919)",
          },  
        className: "toastify"
        }).showToast();
    RefrescarCarrito();
})
//Eventos TOASTIFY AL AGREGAR UN PRODUCTO AL CARRITO
eBoton3.addEventListener("click", () => {
    carrito.src = "/imagenes/index/cart-plus-fill.svg";
    Carrito.push(new Producto("Alloy FPS RGB", 21000));
    Toastify({
        text: "Se agregó Alloy FPS RGB al carrito",     
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #FF5353, #FF1919)",
          },  
        className: "toastify"
        }).showToast();
    RefrescarCarrito();
})
eCarrito.addEventListener("click", () => {
    RefrescarCarrito();
})
//función para actualizar el carrito y hacerlo visible/invisible
function RefrescarCarrito(){
    if(Carrito.length === 0){}
    else{
        if(visible === false){      
            eCuadro.className = "CarritoVisible";
            Carrito.forEach(element => {
                let li = document.createElement("li");
                li.innerHTML = element.toString();
                li.className = "listCarroEvento";
                eLista.append(li);
            });
            let img = document.createElement("img");
            img.src ="/imagenes/js/icons8-más-24.png";
            img.className = "botoncito";
            img.id = "botoncito";
            eLista.append(img);
            eTotal.innerText = `Total: $${calcularPrecio(Carrito)}`;
            visible = true;
        }
        else{
            eCuadro.className = "CarritoNoVisible";
            visible = false;
            eLista.innerHTML = "";
        }   
    }     
}
//#endregion
//#region Evento LOGIN + JSON + PROMISE + ASINCRÓNICO
//CONSEGUIR LISTA DE USUARIO
let lista = JSON.parse(localStorage.getItem("array"));
const listaUsuario = [];
if(lista != null){
    for(i = 0; i < lista.length; i++){
        listaUsuario[i] = lista[i];
    }
}
//PROMESA PARA MOSTRAR, SI LOS USUARIOS EXISTEN, LA LISTA Y SINO DICE QUE LA LISTA ESTÁ VACÍA
let boolLista = lista === null ? false : true;
let MostrarDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            boolLista ? resolve(lista) : reject("La lista está vacía");
        }, 2000)
    })
}
MostrarDatos()
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
})

//DOM
let divCarro = document.getElementById("divCarrito");
let eUsuario = document.getElementById("usuario");
let eAceptar = document.getElementById("botonAceptar");
let eBorrar = document.getElementById("botonBorrar");
let eGuardar = document.getElementById("botonGuardar");
let inputNombre = document.getElementById("inputNombre");
let inputPW = document.getElementById("inputPW");
let formulario = document.getElementById("formularioCarrito");
let mensaje = document.getElementById("mensajeEvento");
let visible1 = false;
//EVENTO PARA MOSTRAR LA SECCION DE LOGIN
eUsuario.addEventListener("click", () =>{
    if(visible1 == false){
        globalDesc.className = "globalDescNoVisible";
        divCarro.className = "divCarritoVisible";
        visible1 = true;
    }
    else{
        divCarro.className = "divCarritoNoVisible";
        visible1 = false;
    }
})
//EVENTO INGRESAR DEL LOGIN
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let inputs = e.target.children;
    console.log(inputs[1].value);
    console.log(inputs[3].value);
    let aux = listaUsuario.find(x => x.nombre == inputs[1].value);
    console.log(aux);
    let existe = (aux != undefined) ? true : false;
    mensaje.innerHTML = existe ? (aux.contraseña === inputs[3].value ? `Bienvenido ${inputs[1].value}`: `Contraseña incorrecta`) : `Usuario no encontrado`;
}) 
//EVENTO GUARDAR USUARIO
eGuardar.addEventListener("click", () => {
    let nombre = inputNombre.value;
    let pw = inputPW.value;
    listaUsuario.push(new Usuario(nombre, pw));
    localStorage.setItem("array",JSON.stringify(listaUsuario));
})
//EVENTO LIMPIAR TODOS LOS USUARIOS DE LA LISTA
eBorrar.addEventListener("click", () => {
    localStorage.clear();
    listaUsuario.forEach(item => {
        listaUsuario.pop();
    })
})

//#endregion
//#region Fetch LISTA DE TODOS LOS PRODUCTOS
//DOM
let globalDesc = document.getElementById("globalDesc")
let botonLista = document.getElementById("botonLista");
let cuadroDesc = document.getElementById("cuadroDesc");
let boolDescVisible = false;
//EVENTO CARGAR LA LISTA CON FETCH Y HACERLO VISIBLE/INVISIBLE
botonLista.addEventListener('click', () =>{
    divCarro.className = "divCarritoNoVisible"
    globalDesc.className = "globalDesc"
    if(boolDescVisible == false){
        fetch('../../json/productos.json')
    .then(Response => Response.json())
    .then(productos => {
        cuadroDesc.innerHTML = "";
        productos.forEach((producto) =>{        
            cuadroDesc.innerHTML += `
            <div class = "mensajeDesc">
            <p>Nombre: ${producto.nombre}</p>
            <p>Valor: ${producto.valor}</p>
            </div>`
        })
    })
    boolDescVisible = true;
    }
    else{
        globalDesc.className = "globalDescNoVisible";
        boolDescVisible = false;
    }
})
//#endregion
//#region Intervalo TOASTIFY CADA 20S
setInterval(Intervalo, 20000);
function Intervalo(){
    Toastify({
        text: "Aprovecha los nuevos descuentos de verano!",     
        duration: 6000,
        style: {
            background: "linear-gradient(to right, #FF5353, #FF1919)",
          },  
        className: "toastify"
    }).showToast();
}
//#endregion
