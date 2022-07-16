//EXTRACCION LOCALSTORAGE

let lsNombre = localStorage.getItem('nombreJugador')
let lsImagen = localStorage.getItem('urlImagen')
let lsNacion = localStorage.getItem('Nacionalidad')
let lsFecha = localStorage.getItem('fechaNac')
let lsCantera = localStorage.getItem('cantera')


// MODIFICACION HEAD ---> TITLE y FAVICON //
document.title = lsNombre

let setfavicons = (favImg) => {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}

setfavicons(`../${lsImagen}`)

// CREAR DOCUMENTO //

tarjetaJugador && (
    tarjetaJugador.innerHTML = `<div class="card-renglon" id="card-Nombre">Nombre: ${lsNombre}</div>
    <div class="card-renglon" id="card-Nac">Nacimiento: ${lsFecha} - ${lsNacion}</div>
    <div class="card-renglon" id="card-Cantera">Cantera: ${lsCantera}<img id="escudoCantera"></div>
    <div class="card-imagen" id="card-Imagen"><img src="../${lsImagen}"></img>`
)

buscarCantera('escudoCantera',lsCantera)

