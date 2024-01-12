const menu = document.querySelector('.menu')


// let linkTorneo = document.title == 'Club Atletico Talleres || Inicio' ? 'html/torneo.html' : '../html/torneo.html'
// let linkJugadores = document.title == 'Club Atletico Talleres || Inicio' ? 'html/jugadores.html' : '../html/jugadores.html'
// let linkPartidos = document.title == 'Club Atletico Talleres || Inicio' ? 'html/partidos.html' : '../html/partidos.html'

menu.innerHTML = ` 
<div class="logo">
    <img src="${linkLogo}">
</div>
<div class="btnbox-menu">
<a href="#">Torneo</a>
<a href="#">Jugadores</a>
<a href="#">Partidos</a>
</div>`