
let armarPlantel = () => {
    jug22.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1
        }
        return 0
    })

    let numero = 1;
    plantel.innerHTML += `  <div class="plantel-renglon"><a href="#">
                            <div class="plantel-img"></div>
                            <div class="plantel-nombre"><h4>Nombre</h4></div>
                            <div class="plantel-nacimiento"><h4>Fecha Nacimiento</h4></div>
                            <div class="plantel-cantera"><h4>Cantera</h4></div>
                            </a>
                            </div>`
    for (gioca of jug22) {
        let idimg = `escudoCantera${numero}`
        plantel.innerHTML += `  <div class="plantel-renglon" data-info="${gioca.ident}">
                                <a href="jugador.html" data-info="${gioca.ident}">  
                                <div class="plantel-img"><img src="${gioca.imagen}" data-info="${gioca.ident}"></div>
                                <div class="plantel-nombre"  data-info="${gioca.ident}">${gioca.nombre}</div>
                                <div class="plantel-nacimiento" data-info="${gioca.ident}">${gioca.nacimiento}</div>
                                <div class="plantel-cantera" data-info="${gioca.ident}">${gioca.cantera}  <img id="${idimg}"></div>
                                </a>
                                </div>`;
                                buscarCantera(idimg,gioca.cantera)
                                numero++
    }
    

}
plantel && armarPlantel()
plantel && plantel.addEventListener('click',function(e){
    let elegido = e.target.dataset.info;
    console.log(elegido)
    let guardarDatos = jug22.filter(p => p.ident.includes(elegido))
    localStorage.setItem('nombreJugador',guardarDatos[0].nombre)
    localStorage.setItem('fechaNac',guardarDatos[0].nacimiento)
    localStorage.setItem('Nacionalidad',guardarDatos[0].nacion)
    localStorage.setItem('urlImagen',guardarDatos[0].imagen)
    localStorage.setItem('cantera',guardarDatos[0].cantera)
})