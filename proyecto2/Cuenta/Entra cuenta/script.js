//ejemplo que se debe eliminar
let usuarios = [{
    nombre:"Marco",
    apellido:"Renato ruiz",
    dni:"938234234",
    correo:"marcoadndres@ElementInternals.com",
    userName:"Marco_33",
    password:"102938"
}];
let botonEntrar = document.querySelector("#boton-entrar");

botonEntrar.addEventListener("click", function(event){
    event.preventDefault();
    let usernameCli = document.querySelector("#username").value;
    let passwordCli = document.querySelector("#password").value;
    verificacionEntar(usernameCli,passwordCli);
    
})

function verificacionEntar(usernameCli,passwordCli){
    let verificacionEntar = false;
    for(let i= 0; i<usuarios.length; i++){
        if(usernameCli === usuarios[i].userName && passwordCli === usuarios[i].password){
            verificacionEntar=true;
            alert(`Hola ${usuarios[i].nombre}`);
            window.location.href ="../Tienda/index.html";
        }
    }
    if(!verificacionEntar){
        alert('Usuario o contraseña incorrecta');
    }
}