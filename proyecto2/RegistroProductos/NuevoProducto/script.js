let botonEnviar = document.querySelector("#botonEnviar");
let nuevoProd;


//AHORA HACER CUANDO SI SE AGRAGA ALGO DEL MISMO PRODUCTO OSEA PAPA Y PAPA DEBE DE AUMENTAR LA CANTIDAD Y AGRGARSE AL HISTORIAL NADA MAS
let listaProductos =[];
let listahistorialReg= [];
botonEnviar.addEventListener("click",function(){
    let nombreProducto = document.querySelector("#nombreProducto").value;
    let precioProducto = document.querySelector("#precioProducto").value;
    let cantidadProducto = document.querySelector("#cantidadProducto").value;
    let nombreProd = nombreProducto;
    let precioProd = parseInt(precioProducto);
    let cantidadProd = parseInt(cantidadProducto);
    agregarProducto(nombreProd,precioProd,cantidadProd)
});



class NuevoProducto {
    constructor({
        _nombre,
        marca = "", 
        precio, 
        cantidad,
    }){
    this._nombre = _nombre,
    this.marca = marca,
    this.precio = precio,
    this.cantidad = cantidad;
    //Fecha y hora
    let fechaActual = new Date();
    let fechaYHoraActual = fechaActual.toLocaleString();
    
    this.fecha = fechaYHoraActual;
    this.mensaje = `Se registro una entrada del producto ${this._nombre} con un precio de S/${precio} con una cantidad de ${cantidad} productos esto se hizo esta fecha:${fechaYHoraActual}`;
}
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    agregarProductoaLista(){
        listaProductos.push({
            nombre:this._nombre ,
            marca:this.marca ,
            precio:this.precio ,
            cantidad:this.cantidad
        });
        console.log(listaProductos);
    }
    agregarListaHRegistros(){
        listahistorialReg.push({
            nombre: this._nombre,
            marca: this.marca,
            precio: this.precio,
            cantidad: this.cantidad,
            mensaje: this.mensaje,
            fecha: this.fecha
        });
        console.log(listahistorialReg);
    }
    
};

function agregarProducto (nombre,precio,cantidad){
    const nuevoProd= new NuevoProducto({
        _nombre: nombre,
        precio:precio,
        cantidad:cantidad
    });
    
    nuevoProd.agregarProductoaLista();
    nuevoProd.agregarListaHRegistros();
} 


///Se debe de ingrear el nombre del objeto q se quiere cabiar
function editarProducto(nuevoNombre){
    nuevoProd._nombre = nuevoNombre;
}
//Nose si sea un funcion, talvez con el html puedo hacerlo
function limpiar(){

}

function eliminarProducto(nombreP){
    productos.pop();
}




//class soccerPlayer {
//    constructor({
//        nombre, 
//        posicion, 
//        dorsal, 
//        goles = 0
//    }) {
//        this.nombre = nombre;
//        this.posicion = posicion;
//        this.dorsal = dorsal;
//        this.goles = goles;
//    }
//    golesEstePartido(numeroGoles) {
//        this.goles += numeroGoles;
//}
//}
//    
//let CristianoRonaldo = new soccerPlayer({
//    nombre: "Cristiano Ronaldo",
//    posicion: "Delantero",
//    goles: 12,
//    dorsal: "7"
//});
//    CristianoRonaldo;



