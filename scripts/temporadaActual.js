class partidos{
    constructor(fecha,rival,condicion,gTalleres,gRival){
        this.fecha = fecha,
        this.rival = rival,
        this.condicion = condicion,
        this.gTalleres = gTalleres,
        this.gRival = gRival
    }
}
class tabla{
    constructor(rival,victorias,empates,derrotas,gf,gc,dif,pts,pjeELO){
        this.rival = rival,
        this.victorias = victorias,
        this.empates = empates,
        this.derrotas = derrotas,
        this.gf = gf,
        this.gc = gc,
        this.dif = dif,
        this.pts = pts,
        this.pjeELO = pjeELO
    }
}

cl22.push(new partidos('12.6.2022','Argentino de Quilmes','visitante',0,0));
cl22.push(new partidos('20.6.2022','J.J. Urquiza','local',1,0))
cl22.push(new partidos('25.6.2022','Cañuelas','visitante',1,1))
cl22.push(new partidos('2.7.2022','Comunicaciones','local',3,2))
cl22.push(new partidos('12.7.2022','Los Andes','visitante',0,0))
cl22.push(new partidos('17.7.2022','Ituzaingo','local','.','.'))
cl22.push(new partidos('-.-.-','Fenix','visitante','.','.'))
cl22.push(new partidos('-.-.-','San Miguel','local','.','.'))
cl22.push(new partidos('-.-.-','Deportivo Armenio','visitante','.','.'))
cl22.push(new partidos('-.-.-','Dock Sud','local','.','.'))
cl22.push(new partidos('-.-.-','UAI Urquiza','visitante','.','.'))
cl22.push(new partidos('-.-.-','Villa San Carlos','local','.','.'))
cl22.push(new partidos('-.-.-','Defensores Unidos','visitante','.','.'))
cl22.push(new partidos('-.-.-','Deportivo Merlo','local','.','.'))
cl22.push(new partidos('-.-.-','Colegiales','visitante','.','.'))
cl22.push(new partidos('-.-.-','Acassuso','local','.','.'))

cl22tabla.push(new tabla('Acassuso',2,1,1,5,3))
cl22tabla.push(new tabla('Argentino de Quilmes',1,1,2,4,6))
cl22tabla.push(new tabla('Cañuelas',0,2,3,3,7))
cl22tabla.push(new tabla('Colegiales',3,0,1,4,2))
cl22tabla.push(new tabla('Comunicaciones',1,2,2,7,10))
cl22tabla.push(new tabla('Defensores Unidos',2,3,0,7,4))
cl22tabla.push(new tabla('Deportivo Armenio',2,2,0,4,1))
cl22tabla.push(new tabla('Deportivo Merlo',2,1,2,8,8))
cl22tabla.push(new tabla('Dock Sud',0,1,4,5,12))
cl22tabla.push(new tabla('Fenix',1,1,3,5,7))
cl22tabla.push(new tabla('Ituzaingo',2,3,0,8,4))
cl22tabla.push(new tabla('J.J. Urquiza',1,1,3,2,4))
cl22tabla.push(new tabla('Los Andes',0,3,2,2,6))
cl22tabla.push(new tabla('San Miguel',2,2,0,4,2))
cl22tabla.push(new tabla('Talleres (RE)',2,3,0,5,3))
cl22tabla.push(new tabla('UAI Urquiza',2,3,0,4,0))
cl22tabla.push(new tabla('Villa San Carlos',1,3,1,6,4))
