class newsFormat {
    constructor(date,title,body,image,category){
        this.date = date,
        this.title = title,
        this.body = body,
        this.image = image,
        this.category = category
    }
}

let listNews = []

// listNews.push(new newsFormat("","","","",""))

listNews.push(new newsFormat("03/01/2024","Fixture","Fixture confirmado, el campeonato comienza el 3 de febrero","https://i.ibb.co/CVwppGJ/fixture.jpg","Primera Nacional"))
listNews.push(new newsFormat("04/01/2024","3 Incorporaciones","Juan Rodriguez, lateral izquierdo proveniente de Banfield. Luciano Sanchez, central proveniente de la UAI Urquiza y David Achucarro, zaguero izquierdo que llega desde el Club Almagro son las nuevas incorporaciones del rojo para afrontar la Primera Nacional 2024","https://i.ibb.co/Xk1J9X6/incorporaciones.jpg","Contratos"))
listNews.push(new newsFormat("08/01/2024","Luciano Arcuri no renovó","Luciano Arcuri, surgido en las divisiones inferiores del club, ha decidido separar su camino de la institucion al no querer renovar su contrato en este 2024, desde ya queremos desearle a Luciano lo mejor y agradecerle por estos años de futbol que nos dio","https://i.ibb.co/DK7Lgwr/arcuri.jpg","Contratos"))
listNews.push(new newsFormat("10/01/2024","3 Renovaciones","Agustin Campana, Ciro Campuzano y Rodrigo Cao renovaron sus contratos para jugar el nacional con Talleres","https://i.ibb.co/yQWKGV2/Campana-Renovacion.jpg","Contratos"))
listNews.push(new newsFormat("10/01/2024","Amistoso","Talleres jugo un amistoso contra Central Cordoba de Santiago del Estero en el Pablo Comelli donde se disputaron 2 tiempos de 35' minutos y el equipo santiagueño ganaron por 1-0 - Foto: Osvaldo Arias | Dpto. de Prensa C.A.Talleres","https://i.ibb.co/Zd7DxJw/amistoso-cco.jpg","Futbol Profesional"))

