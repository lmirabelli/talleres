let numeroFecha = 5;

const menu = document.getElementById('menu');
const jug = document.getElementById('jug');
const resTempActual = document.getElementById('resultados');
const ultPart = document.getElementById('ultPart');
const tabActual = document.getElementById('tablaActual');
const etiqFoto = document.getElementById('etiqfoto');
const tarjetaJugador = document.getElementById('card');
const plantel = document.getElementById('plantel');
const historial = document.getElementById('historial');

let rootFotoIndex = ['https://i.ibb.co/qsmQDXS/cani.jpg','https://i.ibb.co/Cn52SFH/eldiego.jpg']


// Planteles
let jug22 = [];
let cl22 = [];
let cl22tabla = []
let listaRivales = [];
let encuentrosHistorico = [];


let buscarCantera = (etiq, inferiores) => {
    inferiores == "Quilmes" && (inferiores = "Quilmes AC"); 
    let buscarEscudoCantera = listaRivales.filter(p => p.nombre.includes(inferiores))
buscarEscudoCantera.forEach((eqxeq) => {
    document.getElementById(etiq).setAttribute('src', eqxeq.imagen)
})
}

//Partidos de la historia

let pHist = (idPart) => {
    let matchnumero = 1
    idPart.innerHTML += `<div class="renglon-partido">
        <div class="datos-partido">Fecha</div>
        <div class="datos-partido">Rival</div>
        <div class="datos-partido">Torneo</div>
        <div class="datos-partido">Estadio</div>
        <div class="gol-partido"></div>
        <div class="gol-partido"></div>
        </div>`
    for(match of encuentrosHistorico){
        let enc = `match${matchnumero}`;
        idPart.innerHTML += `<div class="renglon-partido">
        <div class="datos-partido">${match.fecha}</div>
        <div class="datos-partido">${match.rival}  <img id="${enc}"></div>
        <div class="datos-partido">${match.torneo}</div>
        <div class="datos-partido">${match.cancha}</div>
        <div class="gol-partido">${match.gCAT}</div>
        <div class="gol-partido">${match.gRival}</div>
        </div>`

        buscarCantera(enc,match.rival)
        matchnumero++
    }
}