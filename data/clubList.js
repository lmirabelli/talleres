let clubes = []

class clubFormat{
    constructor(nombre,estadio,ciudad,linkImagen,colorRival1,colorRival2){
        this.nombre = nombre,
        this.estadio = estadio,
        this.ciudad = ciudad,
        this.linkImagen = linkImagen,
        this.colorRival1 = colorRival1,
        this.colorRival2 = colorRival2
    }
}

clubes.push(new clubFormat('san miguel','malvinas argentinas','san miguel','https://upload.wikimedia.org/wikipedia/commons/b/b7/SAN_MIGUEL.png','#fff','#00923F'))