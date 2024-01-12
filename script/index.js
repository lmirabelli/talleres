const newsBox = document.querySelector('.last-news')
const rivalBox = document.querySelector('.next-rival')
const tableBox = document.querySelector('.table')
const sponsorsBox = document.querySelector('.sponsors')

let linkLogo = document.title == 'Club Atletico Talleres || Inicio' ? 'images/logo.webp' : '../images/logo.webp'
let lastNews = listNews.reverse()

let calculoTabla = (pos) => {
    let indice = 30
    for(i of pos){
        i.pts = i.pg * 3 + i.pe
        i.dif = i.gf - i.gc
        i.ptsTotal = i.pts + i.dif / 1000 + i.gf / 10000 + indice / 1000000
        indice--
    }
}


if(newsBox){

    let ultimaNoticia = lastNews[0]
    newsBox.innerHTML += `<div class="lastBox">
    <h3>${ultimaNoticia.title}</h3>
    <img src="${ultimaNoticia.image}">
    <p>${ultimaNoticia.body}</p>
    </div>`

    for(i = 1 ; i < 5 ; i++){

        let otrasNoticias = lastNews[i]
    newsBox.innerHTML += `<div class="otherBox">
    <h3>${otrasNoticias.title}</h3>
    <img src="${otrasNoticias.image}">
    <p>${otrasNoticias.body}</p>
    </div>`
    }
}

if(rivalBox){
    let proximoRival = s24.find(a => a.resultado == "")
    let escudo = clubes.find(a => a.nombre == proximoRival.rival)
    rivalBox.innerHTML += `<h3 style="--resplandor:${escudo.colorRival2}; --colorFuente:${escudo.colorRival1}">${proximoRival.rival}</h3>
    <img src="${escudo.linkImagen}" style="--resplandor:${escudo.colorRival2}">
    <h4>Fecha: ${proximoRival.fecha}</h4>
    <h4>Estadio: ${proximoRival.estadio}, ${proximoRival.ciudad}</h4>
    <h4>Torneo: ${proximoRival.torneo}</h4>
    `
}

if(tableBox){
    calculoTabla(tablaPosiciones)
    let tablaSort = tablaPosiciones.sort((a,b) => b.ptsTotal - a.ptsTotal)
    for(i of tablaSort){
        tableBox.innerHTML += `<div class="line">
        <div class="name">${i.nombre}</div>
        <div class="data points">${i.pts}</div>
        <div class="data">${i.pg}</div>
        <div class="data">${i.pe}</div>
        <div class="data">${i.pp}</div>
        </div>`
    }
    console.log(tablaSort)
}

if(sponsorsBox){
    
    for(i of sponsorsList){
        sponsorsBox.innerHTML += `<a href="${i.link}">
        <img src="${i.imagen}">
        </a>`
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const cursorImage = document.createElement('img');
    cursorImage.src = linkLogo;
    cursorImage.id = 'cursorImage';
  
    document.body.appendChild(cursorImage);
  
    document.addEventListener('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;
  
      cursorImage.style.left = x + 'px';
      cursorImage.style.top = y + 'px';

  });
});