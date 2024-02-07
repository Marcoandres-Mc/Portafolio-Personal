let productoSecret ={
        nombre: "nose",
        id: "233",
        cantidad: 30
}


export class ProductoSecretos{
    constructor({
        id,
        nombre,
    }){
        this.id = id;
        this.nombre = nombre;

    }
    prodDisponible(){
        if(this.nombre === productoSecret.nombre && this.id === productoSecret.id){
            if(productoSecret.cantidad > 0){
                return console.log("si hay");
            }else{
                return console.log("no hay");
            }
        }else{
            console.log("Nombre y id incorrecto");
        }

}
}