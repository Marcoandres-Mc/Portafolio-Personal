class Student{
    constructor({
        nombre,
        username,
        email,
        curso,
    }){
        this.nombre = nombre;
        this.username = username;
        this.email = email;
        this.curso = curso;


    }


}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
}
class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
}








