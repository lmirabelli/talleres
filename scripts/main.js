menu && (menu.innerHTML = `<img src="https://i.ibb.co/NCFWL81/cat.png">
                            <div class="botones"><a href="../index.html">Inicio</a>
                            <a href="../html/jugadores.html">Jugadores</a>
                            <a href="../html/partidos.html">Partidos</a>
                            <a href="../html/historia.html">Historia</a>
                            </div>`)

// FOTOS DE JUGADORES EN EL BANNER //                   

let fotosBanner = () => {
    jug22.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1
        }
        return 0
    })
    for (giocatore of jug22) {
        jug.innerHTML += `<a href="../html/jugador.html"><img class="fotoBanner" src="${giocatore.imagen}" id="${giocatore.ident}" title="${giocatore.nombre}"></a>`
    }
}





// RESULTADOS DE LA TEMPORADA ACTUAL //

let resultActual = () => {
    let fecha = 0;
    for (match of cl22) {
        idfecha = `fc${fecha}`
        idescudo = `esc${fecha}`
        resTempActual.innerHTML += `<div class="renglon">
                                    <div class="fechaFixture">${match.fecha}</div>
                                    <div class="escudito"><img id="${idescudo}"></img></div>
                                    <div class="rivalFixture" id="${idfecha}">${match.rival}</div>
                                    <div class="condFixture">${match.condicion}</div>
                                    <div class="golFixture">${match.gTalleres}</div>
                                    <div class="golFixture">${match.gRival}</div>
                                    </div>`

        let buscarEscudo = listaRivales.filter(p => p.nombre.includes(match.rival))
        buscarEscudo.forEach((eqxeq) => {
            document.getElementById(idescudo).setAttribute('src', eqxeq.imagen)
        })

        fecha++
    }
}

let ultPartidos = () => {
    ultPart.innerHTML = `   <div class="renglon"><h4>Ultimo Partido</h4></div>
                            <div class="renglon">
                            <div class="fechaFixture">${cl22[numeroFecha - 1].fecha}</div>
                            <div class="escudito"><img id="ultEscudo"></img></div>
                            <div class="rivalFixture" id="ultR">${cl22[numeroFecha - 1].rival}</div>
                            <div class="condFixture">${cl22[numeroFecha - 1].condicion}</div>
                            <div class="golFixture">${cl22[numeroFecha - 1].gTalleres}</div>
                            <div class="golFixture">${cl22[numeroFecha - 1].gRival}</div>
                            </div>`
    proxPart.innerHTML = `  <div class="renglon"><h4>Proximo Partido</h4></div>
                            <div class="renglon">
                            <div class="fechaFixture">${cl22[numeroFecha].fecha}</div>
                            <div class="escudito"><img id="proxEscudo"></img></div>
                            <div class="rivalFixture" id="proxR">${cl22[numeroFecha].rival}</div>
                            <div class="condFixture">${cl22[numeroFecha].condicion}</div>
                            <div class="golFixture">${cl22[numeroFecha].gTalleres}</div>
                            <div class="golFixture">${cl22[numeroFecha].gRival}</div>
                            </div>`
    let buscarUltEscudo = listaRivales.filter(p => p.nombre.includes(cl22[numeroFecha - 1].rival))
    let buscarProxEscudo = listaRivales.filter(p => p.nombre.includes(cl22[numeroFecha].rival))
    buscarUltEscudo.forEach((eqxeq) => {
        document.getElementById('ultEscudo').setAttribute('src', eqxeq.imagen)
    })
    buscarProxEscudo.forEach((eqxeq) => {
        document.getElementById('proxEscudo').setAttribute('src', eqxeq.imagen)
    })

}

// TABLA TORNEO ACTUAL
let posid = 1;
for(posicion of cl22tabla){
    let puntos = posicion.victorias * 3 + posicion.empates;
    let diferencia = posicion.gf - posicion.gc;
    let elo = puntos + diferencia / 100 + posicion.gf / 1000 + posid / 10000;
    posicion.pts = puntos;
    posicion.dif = diferencia;
    posicion.pjeELO = elo;

    posid++
}
cl22tabla.sort((a, b) => {
    if (a.pjeELO < b.pjeELO) {
        return 1;
    }
    if (a.pjeELO > b.pjeELO) {
        return -1
    }
    return 0
})
let tablaActual = () => {
    posid = 1
    tabActual.innerHTML += `<div class="renglon">
            <div class="escudito"></div>
            <div class="eqTabla">Equipo</div>
            <div class="resT">PG</div>
            <div class="resT">PE</div>
            <div class="resT">PP</div>
            <div class="resT">GF</div>
            <div class="resT">GC</div>
            <div class="resT">DIF</div>
            <div class="resT pts">PTS</div>
            </div>`
    for(posicion of cl22tabla){
         let idPosTb = `tbl${posid}`
         let eqtb = `eqtb${posid}`
        tabActual.innerHTML += `<div class="renglon">
            <div class="escudito"><img id="${idPosTb}"></div>
            <div class="eqTabla" id="${eqtb}">${posicion.rival}</div>
            <div class="resT">${posicion.victorias}</div>
            <div class="resT">${posicion.empates}</div>
            <div class="resT">${posicion.derrotas}</div>
            <div class="resT">${posicion.gf}</div>
            <div class="resT">${posicion.gc}</div>
            <div class="resT">${posicion.dif}</div>
            <div class="resT pts">${posicion.pts}</div>
            </div>`
            let buscarEscudo = listaRivales.filter(p => p.nombre.includes(posicion.rival))
        buscarEscudo.forEach((eqxeq) => {
            document.getElementById(idPosTb).setAttribute('src', eqxeq.imagen)
        })
            posid++
    }
}

// ELECCION DE LA FOTO DEL INDEX //

let elegirFotoIndex = () =>{
    let numero = Math.random()
    let cantFotos = rootFotoIndex.length
    let fotoElegida = Math.floor(numero * cantFotos)

    etiqFoto.setAttribute('src',rootFotoIndex[fotoElegida])
}


jug && fotosBanner()
jug && jug.addEventListener('click',function(e){
    let elegido = e.target.id;
    let guardarDatos = jug22.filter(p => p.ident.includes(elegido))
    localStorage.setItem('nombreJugador',guardarDatos[0].nombre)
    localStorage.setItem('fechaNac',guardarDatos[0].nacimiento)
    localStorage.setItem('Nacionalidad',guardarDatos[0].nacion)
    localStorage.setItem('urlImagen',guardarDatos[0].imagen)
    localStorage.setItem('cantera',guardarDatos[0].cantera)
})
resTempActual && resultActual()
ultPart && ultPartidos()
tabActual && tablaActual()
etiqFoto && elegirFotoIndex()
historial && pHist(historial)
