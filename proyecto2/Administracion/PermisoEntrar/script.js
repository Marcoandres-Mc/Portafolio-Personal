//ejemplo borrar 
let adminsRegistrados=[{
    usuario: "Marco",
    contraseña: 123
}];

let botonSubmit = document.querySelector("#botonSubmit");

botonSubmit.addEventListener("click",function(event){
    event.preventDefault();
    let usuarioEsc = document.querySelector("#adminUsuario").value;
    let contraseñaEsc = document.querySelector("#adminPassword").value;
    verificacionEntrar(usuarioEsc,contraseñaEsc);

})

function verificacionEntrar(usuarioEsc,contraseñaEsc){
    let encontrado = false;
    for(let i=0;i<adminsRegistrados.length;i++){
        if(usuarioEsc == adminsRegistrados[i].usuario && contraseñaEsc == adminsRegistrados[i].contraseña){
            encontrado = true;
            alert('Bienvenido Administrador');
            window.location.href="../index.html";
        }
    }
    if(!encontrado){
        alert('El usuario y la contraseña no coniciden, algo esta mal escrito')   
    }
};