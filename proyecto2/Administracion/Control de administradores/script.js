let adminsRegistrados=[{
    nombre: "Marcoandres",
    usuario: "Marco",
    rol: "Lider",
    contraseña: 123
}];


let botonAgregar = document.querySelector("#agregar");
let botonModificar = document.querySelector("#modificar");
let botonEliminar = document.querySelector("#eliminar");


let divShow = document.querySelector("#divRapidito");
let nuevoInput = document.createElement()

botonAgregar.addEventListener("click",function(){
    divShow.innerHTML = "<p>Nuevo contenido</p>"
    
    //documenet queryElector de lasa variables
    //agregarAdmin();
})

function agregarAdmin(nombre,usuario,rol,contraseña){
    let nuevoAdmin = new Admins({
        nombre: nombre,
        usuario: usuario,
        rol: rol,
        contraseña: contraseña   
    });
    nuevoAdmin.registrarAdmins();
}

class Admins{
    constructor({
        nombre,
        rol,
        usuario, 
        _contraseña
    }){ 
    this._nombre=nombre;
    this.rol=rol
    this.usuario=usuario;
    this._contraseña=_contraseña;
}
    get _contraseña(){
        return this._contraseña;
    }

    set _contraseña(nuevaContraseña){
        return this._contraseña = nuevaContraseña;
    }

    get rol(){
        return this.rol;
    }
    set rol(nuevoRol){
        return this.rol = nuevoRol;
    }

    registrarAdmins(nombre,usuario,rol,contraseña) {
        adminsRegistrados.push({
            nombre: this.nombre,
            rol: this.rol,
            usuario: this.usuario,
            contraseña: this._contraseña
        })
    }



}





//
function sum(num, ...values){
    console.log(num);
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,6,2,3);