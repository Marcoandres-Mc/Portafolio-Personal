let botonCalcular = document.querySelector("#botonCalcular");
botonCalcular.addEventListener("click",function(){
    let part1EquiL = document.querySelector("#primerPartidoPaisLocal");
    let part1EquiV = document.querySelector("#primerPartidoPaisVisita");
    let part1EquiLocal = part1EquiL.textContent;
    let part1EquiVisita = part1EquiV.textContent;

    let part1EquiLocalgoles = document.querySelector("#primerPartidoPaisLocalGoles").value;
    let part1EquiVisitagoles = document.querySelector("#primerPartidoPaisVisitaGoles").value;

    //primerPartido
    resultadoPartido(buscarClass(part1EquiLocal),part1EquiLocalgoles,part1EquiVisitagoles,buscarClass(part1EquiVisita));
})
function buscarClass(equipo){
    switch(equipo){
        case "Argentina" : {
            return Eargentina;
        }
        case "Brasil" : {
            return Ebrasil;
        }
        case "Bolivia" : {
            return Ebolivia;
        }
        case "Chile" : {
            return Echile;
        }
        case "Colombia" : {
            return Ecolombia;
        }
        case "Ecuador" : {
            return Ecolombia;
        }
        case "Paraguay" : {
            return Eparaguay;
        }
        case "Peru" : {
            return Eperu;
        }
        case "Uruguay" : {
            return Euruguay;
        }
        case "Venezuela" : {
            return Evenezuela;
        }      
    }
}

class Estadisticas{
    constructor({
        pais,
        pJugados,
        pGanados,
        pEmpatados,
        pPerdidos,
        gFavorable,
        gEncontra,
    }){
        this.pais = pais;
        this.pJugados=pJugados;
        this.pGanados = pGanados;
        this.pEmpatados = pEmpatados;
        this.pPerdidos = pPerdidos;
        this.gFavorable = gFavorable;
        this.gEncontra = gEncontra;
        this.diferenciaGoles = this.calcularDGoles();
        this.puntos = this.calcularPuntos();
    }

    calcularDGoles() {
        return this.gFavorable - this.gEncontra;
    }

    calcularPuntos() {
        return this.pGanados * 3 + this.pEmpatados;
    }
}




let Eperu = new Estadisticas({
    pais:"peru",   
    pJugados: 6,
    pGanados: 4,
    pEmpatados: 1,
    pPerdidos: 1,
    gFavorable: 20,
    gEncontra: 8,
});

let Echile = new Estadisticas({
    pais:"chile",
    pJugados : 6,
    pGanados : 3,
    pEmpatados : 2,
    pPerdidos : 1,
    gFavorable : 9,
    gEncontra : 7
});
let Euruguay = new Estadisticas({
    pais:"uruguay",
    pJugados : 6,
    pGanados : 5,
    pEmpatados : 0,
    pPerdidos : 0,
    gFavorable : 10,
    gEncontra : 5
})



function resultadoPartido(equiLocal,golesEquiLocal,golesEquiVisita,equiVisita){
    equiLocal.pJugados +=1;
    equiVisita.pJugados +=1;
    equiLocal.gFavorable += golesEquiLocal;
    equiLocal.gEncontra += golesEquiVisita;
    equiVisita.gFavorable += golesEquiVisita;
    equiVisita.gEncontra += golesEquiLocal;

    if (golesEquiLocal>golesEquiVisita){
        equiLocal.pGanados += 1;
        equiVisita.pPerdidos += 1;
        
        return console.log(`El ${equiLocal} ganó por ${golesEquiLocal-golesEquiVisita} goles`);
    }else if(golesEquiLocal<golesEquiVisita){
        equiVisita.pGanados += 1;
        equiLocal.pPerdidos += 1;
        return console.log(`El ${equiVisita} ganó por ${golesEquiVisita-golesEquiLocal} goles`);
    }
    else{
        equiLocal.pEmpatados += 1;
        equiVisita.pEmpatados += 1;
        return console.log("Se empató el partido");
    }
}

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function miFuncion(texto){
    let cadena = texto.length;
    return cadena
} 
console.log(miFuncion("Hola Mundo"));
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function miFuncion(texto,num){
    let cadena = texto.substring(0,num);
    return cadena
} 
console.log(miFuncion("Hola Mundo",4));
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function miFuncion(texto, separador){
    let x = [];
    let solucion = texto.split(separador);
    return console.log(solucion);
}
miFuncion("Hola que tal", " ");

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function miFuncion(texto,veces){
    var resultado = new Array(veces).fill(texto);
    return resultado;
}
console.log(miFuncion("mi mundo",4));


