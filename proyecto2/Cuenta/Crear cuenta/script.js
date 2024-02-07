let usuarios=[];

let botonRegistrar = document.querySelector("#botonRegistrar");

botonRegistrar.addEventListener("click",function(event){
    event.preventDefault(); 
    let nombreUsuario = document.querySelector("#nombreUsuario").value;
    let apellidoUsuario = document.querySelector("#apellidosUsuario").value;
    let DNIUsuario = document.querySelector("#DNIUsuario").value;
    let correoUsuario = document.querySelector("#correoUsuario").value;
    
    
    let userName = document.querySelector("#userName").value;
    let password = document.querySelector("#password").value;
    let rePassword = document.querySelector("#re-password").value;
    //validamos que los campos no esten vacios
    if (nombreUsuario == "" || apellidoUsuario == ""|| DNIUsuario==""|| correoUsuario=="" ||  userName=="" || password== "" || rePassword==""){
        alert("Complete los espacios en blanco")
    }else{
    if(password == rePassword){
        const usuario = new DatosUsuario({
            nombre: nombreUsuario,
            apellido: apellidoUsuario,
            dni: DNIUsuario,
            correo: correoUsuario,
            userName: userName,
            _password: password      
        })
        usuario.registrarUsuario();
        console.log(usuarios);
        alert('Se ha registrado correctamente');
    }else{
        alert("Las contraseñas no conciden, intentelo otra vez")}
}
    
    



})
class DatosUsuario{
    constructor({
        nombre,
        apellido,
        dni,
        correo,
        userName,
        _password
    }){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.correo = correo;
    this.userName = userName;
    this._password = _password;
}

    get password(){
        return this._password;
    }

    set password(newPassword){
        this._password= newPassword;
    }
    registrarUsuario(){
        usuarios.push({
            nombre:this.nombre,
            apellido:this.apellido,
            dni:this.dni,
            correo:this.correo,
            userName:this.userName,
            password:this._password
        })
    }
}





